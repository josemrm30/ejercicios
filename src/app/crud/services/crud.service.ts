import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../interfaces/interfaces';

@Injectable()
export class CrudService {

  private aux!: Employee;
  private _user$: BehaviorSubject<Employee> = new BehaviorSubject<Employee>(this.aux);
  private _buttonName: string = "";

  constructor() { }

  get buttonName(){
    return this._buttonName;
  }
  set buttonName(aux: string){
   this._buttonName = aux;
  }

  get empl() {
    return this._user$.asObservable();
  }
  public changeEmp(emp: Employee): void {
    this._user$.next(emp);
  }


}
