import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HotelService } from '../../services/hotel.service';
import { ChangeShiftComponent } from './change-shift/change-shift.component';

export interface EmployeeData {
  id: string;
  name: string;
  staff: string;
  shift:string;
  joiningDate:string;
  salary:string,
  changeShift:boolean,
  action:string[];
}

@Component({
  selector: 'app-staff-management',
  templateUrl: './staff-management.component.html',
  styleUrls: ['./staff-management.component.css']
})
export class StaffManagementComponent implements AfterViewInit,OnInit{

  displayedColumns: string[] = ['id', 'name', 'staff', 'shift','joiningDate','salary','changeShift','action'];
  dataSource: MatTableDataSource<EmployeeData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog : MatDialog) {
    const rooms =[{
      id:"1",
      name:"Bannoucha",
      staff:"Manager",
      shift:"Evening-4:00 PM - 10:00 PM",
      joiningDate:"Nov 13,2017",
      salary:"2000",
      changeShift:true,
      action:['R','U','D']
    }];

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
   
  openNewShiftModal(){
    this.dialog.open(ChangeShiftComponent)
  }
  

}
