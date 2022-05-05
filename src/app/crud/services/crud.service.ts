import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private _formData!: Employee;

  constructor() { }

  rowSelected(row: Employee){
    this._formData = row;
    
  }


  get formData() {
    return this._formData;
  }

}
