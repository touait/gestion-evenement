import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EvenementComponent } from './components/evenement-stat/evenement.component';
import { VlogstatComponent } from './components/vlogstat/vlogstat.component';
import { UserStatComponent } from './components/user-stat/user-stat.component';
import { TicketStatComponent } from './components/ticket-stat/ticket-stat.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { BodyComponent } from './components/body/body.component';
import { HomeDashComponent } from './components/home-dash/home-dash.component';
import { PubStatComponent } from './components/pub-stat/pub-stat.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatStepperModule} from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { AjoutBlogComponent } from './components/ajout-blog/ajout-blog.component';
import { AjoutPubliciteComponent } from './components/ajout-publicite/ajout-publicite.component';
import { ListPubliciteComponent } from './components/list-publicite/list-publicite.component';
import { ListBlogComponent } from './components/list-blog/list-blog.component';
import { JwtModule } from "@auth0/angular-jwt";
import { EventTableComponent } from './components/event-table/event-table.component';

 




@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    EvenementComponent,
    VlogstatComponent,
    UserStatComponent,
    TicketStatComponent,
    BodyComponent,
    HomeDashComponent,
    PubStatComponent,    
    AjoutBlogComponent,
    AjoutPubliciteComponent,
    ListPubliciteComponent,
    ListBlogComponent,
    EventTableComponent,
        
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    HttpClientModule,
    MatProgressBarModule,
    MatCardModule,
    MatToolbarModule,
    JwtModule
  
  ]
})
export class AdminModule { }
