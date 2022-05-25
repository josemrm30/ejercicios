import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommunicationModule } from './communication/communication.module';
import { CrudModule } from './crud/crud.module';
import { CounterModule } from './counter/counter.module';
import { MaterialModule } from 'src/material.module';
import { LightSwitchModule } from './light-switch/light-switch.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommunicationModule,
    CrudModule,
    CounterModule,
    LightSwitchModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
