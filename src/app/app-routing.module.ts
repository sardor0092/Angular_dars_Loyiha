import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Login1Component } from './login1/login1.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [
  {path:'', redirectTo:'/home' ,pathMatch:'full'} ,
  {path:'home' , component:HomeComponent},

  {path:'about', component:AboutComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'login' , component:Login1Component} ,
  {path:'form' , component:ReactiveFormsComponent} ,
  {path:"**" ,component:PageNotFoundComponent}


 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
