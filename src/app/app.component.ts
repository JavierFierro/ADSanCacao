import { Component, ViewChild } from '@angular/core';
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
          this.success(this.status);
        } else {
          this.status = 'OFFLINE';
          this.offlineService.status = this.status
          this.error(this.status);

          if(this.reload){
            location.reload();
          }
        }
      });
  }

  success(title: string): void {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: title,
      showConfirmButton: false,
      timer: 1500
    })
  }

  error(title: string): void {
    Swal.fire({
      position: 'top',
      icon: 'error',
      title: title,
      showConfirmButton: false,
      timer: 1500
    })
  }

}
