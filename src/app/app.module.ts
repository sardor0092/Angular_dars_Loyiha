import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from  '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materil.module';
import { Login1Component } from './login1/login1.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { DarsService } from './service/dars.service';
import { GlobalErrorhandle } from './service/global.error';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    PageNotFoundComponent,
    Login1Component,
    ReactiveFormsComponent
   
  
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
    
  ],
  providers: [

    {provide:ErrorHandler ,useClass:GlobalErrorhandle}


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
