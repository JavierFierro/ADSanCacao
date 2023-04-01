import { Injectable } from '@angular/core';
import { ConnectionService } from "ngx-connection-service";

@Injectable({
  providedIn: 'root'
})
export class OfflineService {

  status: string;

  constructor() {}

}
