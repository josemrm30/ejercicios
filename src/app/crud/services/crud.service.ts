import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../interfaces/interfaces';

@Injectable()
export class CrudService {

  private aux!: Employee;
  private _emp$: BehaviorSubject<Employee> = new BehaviorSubject<Employee>(this.aux);
  private _buttonName$: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor() { }

  get buttonName() {
    return this._buttonName$.asObservable();
  }

  public changeButtonName(name: string): void {
    this._buttonName$.next(name);
  }

  get empl() {
    return this._emp$.asObservable();
  }
  public changeEmp(emp: Employee): void {
    this._emp$.next(emp);
  }


}
