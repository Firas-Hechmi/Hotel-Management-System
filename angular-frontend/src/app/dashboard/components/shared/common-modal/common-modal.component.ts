import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HotelService } from 'src/app/dashboard/services/hotel.service';

@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
  styleUrls: ['./common-modal.component.css']
})
export class CommonModalComponent implements OnInit {
  title! : string
  type : string=""
  constructor(@Inject(MAT_DIALOG_DATA) public data : string,public hotelService: HotelService) { 
    this.type=data
    this.title=this.hotelService.getCommonModalTitle(this.data)
  }

  ngOnInit(): void {
    
  }

}
