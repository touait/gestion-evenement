import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { BlogComponent } from './components/blog/blog.component';

import { ContactComponent } from './components/contact/contact.component';
import { DetailblogComponent } from './components/detailblog/detailblog.component';
import { EvenementComponent } from './components/evenement/evenement.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { HomeComponent } from './components/home/home.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginComponent } from './components/login/login.component';
import { PannierComponent } from './components/pannier/pannier.component';
import { PayementComponent } from './components/payement/payement.component';
import { ProfilComponent } from './components/profil/profil.component';
import { RestpasswordComponent } from './components/restpassword/restpassword.component';
import { SignupComponent } from './components/signup/signup.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { AjoutBlogComponent } from './modules/admin/components/ajout-blog/ajout-blog.component';
import { AjoutPubliciteComponent } from './modules/admin/components/ajout-publicite/ajout-publicite.component';
import { ListPubliciteComponent } from './modules/admin/components/list-publicite/list-publicite.component';
import { AuthGuard } from './modules/admin/components/services/auth.guard';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { AuthuserGuard } from './services/authuser.guard';
import { SuiviComponent } from './suivi/suivi.component';

const routes: Routes = [
  {path :"" , component :HomeComponent},
  {path :"home" , component :HomeComponent},
  {path :"evenement", component: EvenementComponent},
  {path : "contact", component : ContactComponent ,canActivate:[AuthuserGuard]},
  {path : "login" , component : LoginComponent},
  {path :"singup", component: SignupComponent},
  {path:"admin",canActivate:[AuthGuard],loadChildren:()=> import('./modules/admin/admin.module').then((m)=>m.AdminModule)},
  {path :"pay", component: PayementComponent},
  {path: "cart-page" , component: PannierComponent},
  {path: "ticket", component: TicketsComponent},
  {path : "blog", component : BlogComponent},
  { path : "profil", component : ProfilComponent,canActivate:[AuthuserGuard]},
  { path : "restpassword", component : RestpasswordComponent},
  { path : "reclamation", component : ReclamationComponent,canActivate:[AuthuserGuard]},
  { path : "suivi", component : SuiviComponent},
  {path:"update/:id",component:PannierComponent,canActivate:[AuthuserGuard]},
  {path:"event/:id",component:EventDetailsComponent},


  {path:"payemen/:id",component:PayementComponent ,canActivate:[AuthuserGuard]},
  {path: "ticket/:id", component: TicketsComponent,canActivate:[AuthuserGuard]},

  {path: "ajoutpub", component: AjoutPubliciteComponent ,canActivate:[AuthuserGuard]},
  {path: "ajoutblog", component: AjoutBlogComponent ,canActivate:[AuthuserGuard]},
  {path: "detailblog", component: DetailblogComponent},
  {path: "loginadmin", component: LoginAdminComponent},
  {path: "listepub", component: ListPubliciteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
