import { Component } from '@angular/core';
import { ConnectionService } from 'ngx-connection-service';
import { OfflineService } from 'src/app/modules/core/services/network/offline.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  hasNetworkConnection: boolean;
  status: string;
  reload: boolean = false;

  constructor(
    private connectionService: ConnectionService,
    private offlineService: OfflineService) {

      this.connectionService.monitor().subscribe(currentState => {
        this.hasNetworkConnection = currentState.hasNetworkConnection;
        if (this.hasNetworkConnection) {
          this.reload = true;

          this.status = 'ONLINE';
          this.offlineService.status = this.status
          this.openNetworkToaster("success", "Conectado a Internet");
        } else {   
          this.openNetworkToaster("error", "Sin conexion a internet");       
          this.status = 'OFFLINE';
          this.offlineService.status = this.status

          setTimeout(() => {
            if(this.reload){
              location.reload();
            }
          }, 1500);
        }
      });
  }

  openNetworkToaster(status, message):void{
    var toastMixin = Swal.mixin({
      toast: true,
      icon: status,
      title: 'General Title',
      position: 'top-right',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });

    toastMixin.fire({
      title: message
    });
  }

}
