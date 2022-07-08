import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomManagementComponent } from './components/room-management/room-management.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { StaffManagementComponent } from './components/staff-management/staff-management.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidenavWrapperComponent } from './components/sidenav-wrapper/sidenav-wrapper.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { HeaderComponent } from './components/header/header.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ComplainComponent } from './components/complain/complain.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { AddRoomComponent } from './components/room-management/add-room/add-room.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { HotelService } from './services/hotel.service';
import { CommonModalComponent } from './components/shared/common-modal/common-modal.component';
import { ChangeShiftComponent } from './components/staff-management/change-shift/change-shift.component';
import { DeleteRoomComponent } from './components/room-management/delete-room/delete-room.component';

@NgModule({
  declarations: [
    RoomManagementComponent,
    ReservationComponent,
    StaffManagementComponent,
    SidenavWrapperComponent,
    HeaderComponent,
    AddEmployeeComponent,
    ComplainComponent,
    AddRoomComponent,
    CommonModalComponent,
    ChangeShiftComponent,
    DeleteRoomComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule
  ],
  providers:[HotelService]
})
export class DashboardModule { }
