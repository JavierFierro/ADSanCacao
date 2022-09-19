import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { fromEvent, Observable } from 'rxjs';
import { switchMap, takeUntil, pairwise, finalize } from 'rxjs/operators'

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') public canvas: ElementRef;

  @Input() public width = 600;
  @Input() public height = 700;

  private cx: CanvasRenderingContext2D;

  public mode: string = 'pencil';

  constructor(
    private storage: AngularFireStorage
  ) { }
  
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // get the context
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');
    // set width and height
    canvasEl.width = this.width;
    canvasEl.height = this.height;
    // set default properties about the line
    this.switchToPencil();
    // capture events
    this.captureEvents(canvasEl);
  }

  private captureEvents(canvasEl: HTMLCanvasElement): void {
    fromEvent(canvasEl, 'mousedown')
      .pipe(
        switchMap((e) => {
          return fromEvent(canvasEl, 'mousemove')
            .pipe(
              takeUntil(fromEvent(canvasEl, 'mouseup')),
              takeUntil(fromEvent(canvasEl, 'mouseleave')),
              pairwise()
            )
        })
      )
      .subscribe((res: [MouseEvent, MouseEvent]) => {
        const rect = canvasEl.getBoundingClientRect();

        const prevPos = {
          x: res[0].clientX - rect.left,
          y: res[0].clientY - rect.top
        };

        const currentPos = {
          x: res[1].clientX - rect.left,
          y: res[1].clientY - rect.top 
        };

        this.drawOnCanvas(prevPos, currentPos);
      });
  }

  private drawOnCanvas(
    prevPos: { x: number, y: number },
    currentPos: { x: number, y: number }
  ): void {
    // in case the context is not set
    if (!this.cx) { return; }

    // start our drawing path
    this.cx.beginPath();

    if (prevPos) {
      // sets the start point
      this.cx.moveTo(prevPos.x, prevPos.y); // from
      // draws a line from the start pos until the current position
      this.cx.lineTo(currentPos.x, currentPos.y);
      // strokes the current path with the styles we set earlier
      this.cx.stroke();
    }
  }

  public switchToEraser(): void {
    this.cx.lineWidth = 9;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#fff';
    this.mode = 'eraser';
  }

  public switchToPencil(): void {
    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#000';
    this.mode = 'pencil';
  }

  public eraseImage(): void {
    this.cx.clearRect(0, 0, this.width, this.height); 
  }

  public setImageOnCanvas(imagePath: string): void {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');
    const image = new Image();
    const fileRef = this.storage.ref(imagePath);
    fileRef.getDownloadURL().subscribe(url => {
      image.src = url;
      image.crossOrigin = "anonymous";
      let context = this.cx;
      image.onload = function(){
        context.drawImage(image, 0, 0);
      }
    });
  }

  public saveImageInStorage(agricultorId: string): string {
    let storageRef: AngularFireStorage = this.storage;
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    const filePath = `croquis/${agricultorId}`;
    canvasEl.toBlob(function(blob) {
      const task = storageRef.upload(filePath, blob);
    });
    return filePath;
  }

}
