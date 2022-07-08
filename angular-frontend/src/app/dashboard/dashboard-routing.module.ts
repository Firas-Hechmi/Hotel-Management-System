import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ComplainComponent } from './components/complain/complain.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { RoomManagementComponent } from './components/room-management/room-management.component';
import { SidenavWrapperComponent } from './components/sidenav-wrapper/sidenav-wrapper.component';
import { StaffManagementComponent } from './components/staff-management/staff-management.component';

const routes: Routes = [
  {
    path:'',
    component:SidenavWrapperComponent,
    children:[
      {
        path:'room-management',
        component:RoomManagementComponent
      },
      {
        path:'reservation',
        component:ReservationComponent
      },
      {
        path:'staff-management',
        component:StaffManagementComponent
      },{
        path:'add-employee',
        component:AddEmployeeComponent
      },
       {
        path:'complain',
        component:ComplainComponent
       },
      {
        path:'**',
        redirectTo:'room-management',
        pathMatch:'full'
        
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
