import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatD};

import 'hammerjs';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule, MatButtonModule, MatDialogModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    DialogDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
