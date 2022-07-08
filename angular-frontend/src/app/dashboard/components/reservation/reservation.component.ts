import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HotelService } from '../../services/hotel.service';
import { CommonModalComponent } from '../shared/common-modal/common-modal.component';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(public dialog : MatDialog) { }

  submitReservation():void{
      this.dialog.open(CommonModalComponent,{
        width:"40%",
        data:"room-booking"
      })
  }

  ngOnInit(): void {
    
  }

}
