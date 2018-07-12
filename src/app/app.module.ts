import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JobComponent } from './modules/job/job.component';
import { NewComponent } from './modules/new/new.component';
import { MenuComponent } from './modules/menu/menu.component';
import { HomeComponent } from './modules/home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { ApiService } from './api.service';
import { JobService } from './service/job.service';
import { UserService } from './service/user.service';
import { JobDetailComponent } from './modules/job/job-detail/job-detail.component';
import { NewService } from './service/new.service';
import { NewDetailComponent } from './modules/new/new-detail/new-detail.component';
import { RegisterComponent } from './modules/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    NewComponent,
    MenuComponent,
    HomeComponent,
    JobDetailComponent,
    NewDetailComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HttpModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    MatDialogModule

  ],
  providers: [ApiService, JobService, NewService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
