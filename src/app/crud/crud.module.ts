import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { CrudComponent } from './crud.component';

import { HttpClientModule } from '@angular/common/http';


import { CrudService } from './services/crud.service';
import { MaterialModule } from 'src/material.module';

@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
    CrudComponent

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    CrudComponent,
    FormComponent,
    TableComponent

  ],
  providers: [
    CrudService
  ]
})
export class CrudModule { }
