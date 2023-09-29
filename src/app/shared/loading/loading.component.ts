import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

  open(): void {
    Swal.fire({
      title: 'Por favor espere',
      allowEscapeKey: false,
      allowOutsideClick: false,
      timer: 99999999999,
      didOpen: () => {
        Swal.showLoading()
      }
    });
  }

  openMessage(message: string): void {
    Swal.fire({
      title: message,
      allowEscapeKey: false,
      allowOutsideClick: false,
      timer: 99999999999,
      didOpen: () => {
        Swal.showLoading()
      }
    });
  }

  openMessageWithTimer(message: string, time: number): void {
    Swal.fire({
      title: message,
      allowEscapeKey: false,
      allowOutsideClick: false,
      timer: time,
      didOpen: () => {
        Swal.showLoading()
      }
    });
  }

  close(): void {
    Swal.close();
  }
  
  success(title: string, message: string): void {
    Swal.fire({
      title: title,
      text: message,
      icon: 'success',
      showConfirmButton: false,
      didOpen: () => {
        Swal.hideLoading();
      }
    });
  }

  error(title: string, message: string): void {
    Swal.fire({
      title: title,
      text: message,
      icon: 'error',
      didOpen: () => {
        Swal.hideLoading();
      }
    });
  }

  destroy(): void {
    Swal.close();
  }

}
