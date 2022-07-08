import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable()
export class HotelService {

  private subToolbarTitle : Subject<string>=new Subject<string>()

  constructor() { }

  getCommonModalTitle(type : string) : string{
     if(type==="room-booking")
       return "Room Booking"
     if(type==="check-in")
       return "Check In"
     if(type==="check-out")
       return "Check Out"
       
     return ""
  }

  setSubToolbarTitle(title : string):void{
       this.subToolbarTitle.next(title)
  } 

  getSubToolbarTitle() : Subject<string>{
    return this.subToolbarTitle
  }
  
}
