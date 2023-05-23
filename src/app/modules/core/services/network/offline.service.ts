import { Injectable } from '@angular/core';
import { Agricultor } from 'src/app/interfaces/agricultor';

@Injectable({
  providedIn: 'root'
})
export class OfflineService {

  status: string;
  cachedAgrForm: any;
  cachedLBForm: any;
  cachedVerForm: any;

  constructor() {
  }

}
