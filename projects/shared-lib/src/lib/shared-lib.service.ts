import { Injectable } from '@angular/core';
import { Counter } from '../data/counter';

@Injectable({
  providedIn: 'root'
})
export class SharedLibService {

  constructor() { }

  updateCounter(data: Counter){
     data.counterNumber++;
     return data;
  }
}
