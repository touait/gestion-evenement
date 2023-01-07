import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { EvenementComponent } from './components/evenement/evenement.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ContactComponent } from './components/contact/contact.component';
import { PayementComponent } from './components/payement/payement.component';
import { PannierComponent } from './components/pannier/pannier.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { QRCodeModule } from 'angular2-qrcode';
import { TicketsComponent } from './components/tickets/tickets.component';
import { BlogComponent } from './components/blog/blog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import { RestpasswordComponent } from './components/restpassword/restpassword.component';
import {MatStepperModule} from '@angular/material/stepper';
import { ProfilComponent } from './components/profil/profil.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { AdduserComponent } from './modules/admin/components/adduser/adduser.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { SuiviComponent } from './suivi/suivi.component';
import { SuivirecuserComponent } from './suivirecuser/suivirecuser.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { DetailblogComponent } from './components/detailblog/detailblog.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import {MatMenuModule} from '@angular/material/menu';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgxPrintModule } from 'ngx-print';
//import { NotfoundComponent } from './notfound/notfound.component';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    EvenementComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    PayementComponent,
    PannierComponent,
    EventDetailsComponent,
   
    TicketsComponent,
    RestpasswordComponent,
    ProfilComponent,
    AdduserComponent,
    ReclamationComponent,
    SuiviComponent,
    SuivirecuserComponent,
    DetailblogComponent,
    BlogComponent,
    LoginAdminComponent,
    NotFoundComponent,

   
   
   
    

   
   
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    QRCodeModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    HttpClientModule, 
    MatProgressBarModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule, 
    MatMenuModule,
    NgxPrintModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
