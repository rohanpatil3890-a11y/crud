import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { TodoComponent } from './todo/todo.component';
import{FormsModule}from '@angular/forms';
import { Todo1Component } from './todo1/todo1.component';
import { BikeComponent } from './bike/bike.component';
import { FrootComponent } from './froot/froot.component';
import { MobileComponent } from './mobile/mobile.component'

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    Todo1Component,
    BikeComponent,
    FrootComponent,
    MobileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
