import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-sidenav-wrapper',
  templateUrl: './sidenav-wrapper.component.html',
  styleUrls: ['./sidenav-wrapper.component.css']
})
export class SidenavWrapperComponent implements OnInit,OnDestroy {
  isExpanded=false;
  subToolBarTitleSubscription! : Subscription
  subToolBarTitle : string="Room Management"

  constructor(public hotelService: HotelService,public router: Router) {
    let startUrl=this.router.url
    if(startUrl==="/reservation")
    this.hotelService.setSubToolbarTitle("Reservation")
  if(startUrl==="/room-management")
    this.hotelService.setSubToolbarTitle("Room Management")
  if(startUrl==="/staff-management")
    this.hotelService.setSubToolbarTitle("Staff Management")
  if(startUrl==="/complain")
    this.hotelService.setSubToolbarTitle("Complain")
  if(startUrl==="/add-employee")
    this.hotelService.setSubToolbarTitle("Add Employee")
    this.router.events.subscribe(
      event=>{
        if(event instanceof NavigationEnd )
         {
          if(event.url==="/reservation")
            this.hotelService.setSubToolbarTitle("Reservation")
          if(event.url==="/room-management")
            this.hotelService.setSubToolbarTitle("Room Management")
          if(event.url==="/staff-management")
            this.hotelService.setSubToolbarTitle("Staff Management")
          if(event.url==="/complain")
            this.hotelService.setSubToolbarTitle("Complain")
          if(event.url==="/add-employee")
            this.hotelService.setSubToolbarTitle("Add Employee")
         }
      }
    )
   }

  ngOnInit(): void {
    this.subToolBarTitleSubscription=this.hotelService.getSubToolbarTitle().subscribe(
         title=>this.subToolBarTitle=title
    )
  }

  ngOnDestroy(): void {
      this.subToolBarTitleSubscription.unsubscribe()
  }

  

}
