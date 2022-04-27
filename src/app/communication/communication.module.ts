import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentComponent } from './parent/parent.component';
import { SonComponent } from './son/son.component';
import { CommunicationService } from './services/communication.service';

import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ParentComponent,
    SonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
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
