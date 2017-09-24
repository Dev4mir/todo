import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }  from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import{ HttpModule  } from '@angular/http';
import { MdButtonModule, MdCheckboxModule, MatInputModule, MatDatepickerModule,
        MdNativeDateModule, MatListModule, MatSlideToggleModule, MatToolbarModule,
        MatIconModule, MatDialogModule
      } from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {Autosize} from 'angular2-autosize/src/autosize.directive';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TaskComponent } from './task/task.component';
import { HttpService }  from './service-http/service-http.service';

const ROUTES : Routes = [
  {
    path: '',
    component: RegisterComponent
  },
  {
    path: 'signup',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'task',
    component: TaskComponent,
  },
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    TaskComponent,
    Autosize
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MatInputModule,
    MatDatepickerModule,
    MdNativeDateModule,
    MatListModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
