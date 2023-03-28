import { Injectable } from '@angular/core';
import { ConnectionService } from "ngx-connection-service";

@Injectable({
  providedIn: 'root'
})
export class OfflineService {

  hasNetworkConnection: boolean;
  hasInternetAccess: boolean;
  status: boolean;

  constructor(private connectionService: ConnectionService) { 
    this.connectionService.monitor().subscribe(currentState => {
      this.hasNetworkConnection = currentState.hasNetworkConnection;
      this.hasInternetAccess = currentState.hasInternetAccess;
      this.status = this.hasNetworkConnection;
    });
  }
}
