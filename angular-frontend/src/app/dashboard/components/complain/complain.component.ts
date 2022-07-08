
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HotelService } from '../../services/hotel.service';

export interface ComplaintData {
  id: string;
  complainantName: string;
  type: string;
  complaint:string;
  createdDate:string;
  resolve:boolean,
  budget:string,
}

@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.css']
})
export class ComplainComponent implements AfterViewInit,OnInit{

  displayedColumns: string[] = ['id', 'complainantName','type','complaint','createdDate', 'resolve','budget'];
  dataSource: MatTableDataSource<ComplaintData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog : MatDialog) {
    const complaints =[{
      id:"1",
      complainantName:"Jack",
      type:"Water",
      complaint:"Water problem in bathroom",
      createdDate:"Nov 13,2017",
      resolve:true,
      budget:"1000",
    }];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(complaints);
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
   

  

}

