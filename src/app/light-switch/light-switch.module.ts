import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightSwitchComponent } from './light-switch.component';
import { MaterialModule } from '../../material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LightSwitchComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    LightSwitchComponent

  ],
  providers: [

  ]
})
export class LightSwitchModule { }
