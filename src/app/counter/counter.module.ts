import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/material.module';
import { CounterComponent } from './counter.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    CounterComponent

  ],
  providers: [

  ]
})
export class CounterModule { }
