import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SuivirecuserComponent } from 'src/app/suivirecuser/suivirecuser.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { AjoutBlogComponent } from './components/ajout-blog/ajout-blog.component';
import { AjoutPubliciteComponent } from './components/ajout-publicite/ajout-publicite.component';



import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EvenementComponent } from './components/evenement-stat/evenement.component';
import { EventTableComponent } from './components/event-table/event-table.component';
import { HomeDashComponent } from './components/home-dash/home-dash.component';
import { ListBlogComponent } from './components/list-blog/list-blog.component';
import { ListPubliciteComponent } from './components/list-publicite/list-publicite.component';

import { PubStatComponent } from './components/pub-stat/pub-stat.component';
import { RoleGuard } from './components/services/role.guard';
import { TicketStatComponent } from './components/ticket-stat/ticket-stat.component';
import { UserStatComponent } from './components/user-stat/user-stat.component';
import { VlogstatComponent } from './components/vlogstat/vlogstat.component';

const routes: Routes = [
  
  {path:'', component:DashboardComponent ,children:[
    {path:"" ,component: HomeDashComponent},
    {path:"dashboard" ,component: HomeDashComponent},
    {path:"blog" ,component: VlogstatComponent,canActivate:[RoleGuard]},
    {path:"tickets" ,component: TicketStatComponent ,canActivate:[RoleGuard]},
    {path:"user" ,component: UserStatComponent,canActivate:[RoleGuard] },
    {path:"event" ,component: EvenementComponent ,canActivate:[RoleGuard]},
    {path:"publicite" ,component: PubStatComponent ,canActivate:[RoleGuard]},

    {path:"user/adduser" ,component: AdduserComponent,canActivate:[RoleGuard]},
    {path:"user/updateuser/:idU" ,component: AdduserComponent,canActivate:[RoleGuard]},
  
    {path:"reclamationData",component:SuivirecuserComponent ,canActivate:[RoleGuard]},
    {path:"listblog",component:ListBlogComponent ,canActivate:[RoleGuard]},
    {path:"listepub",component:ListPubliciteComponent,canActivate:[RoleGuard]},
    {path:"listepub/ajoutpub",component:AjoutPubliciteComponent ,canActivate:[RoleGuard]},
    {path:"listblog/ajoublog",component:AjoutBlogComponent,canActivate:[RoleGuard]},
    {path:"eventTable",component:EventTableComponent,canActivate:[RoleGuard]},
    
    

    
  



    //{path:"" ,redirectTo:"/admin/home",pathMatch:"full"},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
