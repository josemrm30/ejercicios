import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentComponent } from './parent/parent.component';
import { SonComponent } from './son/son.component';
import { CommunicationService } from './services/communication.service';

import { MaterialModule } from 'src/material.module';


@NgModule({
  declarations: [
    ParentComponent,
    SonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ParentComponent,
    SonComponent
  ],
  providers: [
    CommunicationService
  ]
})
export class CommunicationModule { }
