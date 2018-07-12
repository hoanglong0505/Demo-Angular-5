import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { JobComponent } from './modules/job/job.component';
import { NewComponent } from './modules/new/new.component';
import { JobDetailComponent } from './modules/job/job-detail/job-detail.component';
import { NewDetailComponent } from './modules/new/new-detail/new-detail.component';
import { RegisterComponent } from './modules/register/register.component';





const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jobs', component: JobComponent },
  { path: 'job-detail/:id', component: JobDetailComponent },
  { path: 'news', component: NewComponent },
  { path: 'new-detail/:id', component: NewDetailComponent },
  { path: 'register', component: RegisterComponent }
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
