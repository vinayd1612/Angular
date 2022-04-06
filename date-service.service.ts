import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateServiceService {

  constructor() { }
  todayDate()
  {
    let date=new Date();
    return date;
  }
}
