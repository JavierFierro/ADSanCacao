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

  @Input() public width = window.innerWidth * 0.60;
  @Input() public height = window.innerHeight * 0.55;

  private cx: CanvasRenderingContext2D;

  public mode: string = 'pencil';

  points: any[] = [];

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
    // this.switchToPencil();
    // capture events
    this.captureEvents(canvasEl);
  }

  private captureEvents(canvasEl: HTMLCanvasElement): void {

    var mousePos = { x:0, y:0 };

    canvasEl.addEventListener("touchstart", function (e) {
      mousePos = getTouchPos(canvasEl, e);
      var touch = e.touches[0];
      var mouseEvent = new MouseEvent("mousedown", {
      clientX: touch.clientX,
      clientY: touch.clientY
      });
      canvasEl.dispatchEvent(mouseEvent);
    }, { passive: false });

    canvasEl.addEventListener("touchend", function (e) {
      var mouseEvent = new MouseEvent("mouseup", {});
      canvasEl.dispatchEvent(mouseEvent);
    }, { passive: false });

    canvasEl.addEventListener("touchmove", function (e) {
      var touch = e.touches[0];
      var mouseEvent = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      canvasEl.dispatchEvent(mouseEvent);
    }, { passive: false });
    
    document.body.addEventListener("touchstart", function (e) {
      if (e.target == canvasEl) {
        e.preventDefault();
      }
    }, { passive: false });
    document.body.addEventListener("touchend", function (e) {
      if (e.target == canvasEl) {
        e.preventDefault();
      }
    }, { passive: false });
    document.body.addEventListener("touchmove", function (e) {
      if (e.target == canvasEl) {
        e.preventDefault();
      }
    }, { passive: false });

    document.body.addEventListener("wheel", function (e) {
      if (e.target == canvasEl) {
        e.preventDefault();
      }
    }, { passive: false });

    canvasEl.addEventListener("mouseenter", (e) => {
      if(this.mode == 'eraser'){
        document.getElementById("canvas").style.cursor = "cell";
      }
    });

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
      let draw = {
        prevX: prevPos.x,
        prevY: prevPos.y,
        CurrX: currentPos.x,
        CurrY: currentPos.y
      }

      // sets the start point
      this.cx.moveTo(prevPos.x, prevPos.y); // from
      // draws a line from the start pos until the current position
      this.cx.lineTo(currentPos.x, currentPos.y);

      if(this.mode === "pencil"){
        this.points.push(draw);
      }
      
      // strokes the current path with the styles we set earlier
      this.cx.stroke();
    }
  }

  public redraw(): void{
    if(this.points.length==0){return;}

    this.cx.clearRect(0,0,this.canvas.nativeElement.width,this.canvas.nativeElement.height);

    this.cx.beginPath();

    this.points.forEach((point) => {
      this.cx.moveTo(point.prevX, point.prevY);
      this.cx.lineTo(point.CurrX, point.CurrY);
    });
    this.cx.stroke();
  }

  public undo(): void{

    this.points.pop();

    this.redraw();
  }

  public switchToEraser(): void {

    this.cx.lineWidth = 15;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#fff';
    this.mode = 'eraser';
  }

  public switchToPencil(): void {
    
    this.cx.lineWidth = 1;
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

  public saveAgricultorImageInStorage(agricultorId: string): string {
    let storageRef: AngularFireStorage = this.storage;
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    const filePath = `croquis/${agricultorId}`;
    canvasEl.toBlob(function(blob) {
      const task = storageRef.upload(filePath, blob);
    });
    return filePath;
  }

  public saveLineaBaseImageInStorage(lbId: string): string {
    let storageRef: AngularFireStorage = this.storage;
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    const filePath = `firma_lb/${lbId}`;
    canvasEl.toBlob(function(blob) {
      const task = storageRef.upload(filePath, blob);
    });
    return filePath;
  }

  public saveVerificacionImageInStorage(verId: string): string {
    let storageRef: AngularFireStorage = this.storage;
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    const filePath = `firma_ver/${verId}`;
    canvasEl.toBlob(function(blob) {
      const task = storageRef.upload(filePath, blob);
    });
    return filePath;
  }

}
function getTouchPos(canvasDom: HTMLCanvasElement, e: TouchEvent): { x: number; y: number; } {
  var rect = canvasDom.getBoundingClientRect();
  return {
    x: e.touches[0].clientX - rect.left,
    y: e.touches[0].clientY - rect.top
  };
}