import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  confirm(title: string, message: string, confirmButtonText: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      Swal.fire({
        title: title,
        text: message,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: confirmButtonText
      }).then((result) => {
        resolve(result.isConfirmed);
      });
    });
  }

}
