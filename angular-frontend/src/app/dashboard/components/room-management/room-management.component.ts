import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { HotelService } from '../../services/hotel.service';
import { CommonModalComponent } from '../shared/common-modal/common-modal.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { DeleteRoomComponent } from './delete-room/delete-room.component';


export interface RoomData {
  id: string;
  type: string;
  status: string;
  checkIn:boolean;
  checkOut:boolean;
  action:string[];
}

@Component({
  selector: 'app-room-management',
  templateUrl: './room-management.component.html',
  styleUrls: ['./room-management.component.css']
})
export class RoomManagementComponent implements AfterViewInit,OnInit {
  displayedColumns: string[] = ['id', 'type', 'status', 'checkIn','checkOut','action'];
  dataSource: MatTableDataSource<RoomData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog : MatDialog,public router : Router) {
    // Create 100 users
    const rooms =[{
      id:"A-1",
      type:"Double",
      status:"BOOKED",
      checkIn:true,
      checkOut:false,
      action:['R','U','D']
    },{
      id:"A-2",
      type:"Single",
      status:"BOOKED",
      checkIn:false,
      checkOut:false,
      action:['R','U','D']
    },
    {
      id:"A-3",
      type:"Family",
      status:"NOT_BOOKED",
      checkIn:false,
      checkOut:false,
      action:['R','U','D']
    }
  ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(rooms);
  }
   ngOnInit(): void {
      
   }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  openAddRoom(){
    this.dialog.open(AddRoomComponent);
  }

  openCheckInModal(){
    this.dialog.open(CommonModalComponent,{
      width:"40%",
      data:"check-in"
    })
  }

  openCheckOutModal(){
    this.dialog.open(CommonModalComponent,{
      width:"40%",
      data:"check-out"
    })
  }

  openDeleteRoomModal(){
    this.dialog.open(DeleteRoomComponent)
  }

  bookRoom(){
    this.router.navigate(['/reservation'])
  }


}
