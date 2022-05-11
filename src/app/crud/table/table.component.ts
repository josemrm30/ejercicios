import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { lastValueFrom } from 'rxjs';
import { Employee } from '../interfaces/interfaces';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  empData!: Employee[];
  rowEmp!: Employee;
  dataSource: any;
  constructor(private http: HttpClient, private crudService: CrudService) {

  }

  async ngOnInit() {
    this.crudService.empl.subscribe(msg => this.rowEmp = msg)
    await this.getEmployees();
  }

  displayedColumns: string[] = ['Username', 'Email', 'Subscribed', 'Country', 'City', 'Action'];


  async getEmployees() {
    const employees$ = this.http.get<Employee[]>("http://localhost:3000/employees/");
    this.empData = await lastValueFrom(employees$);
    this.dataSource = new MatTableDataSource(this.empData);
  }

  rowSelected(row: Employee) {
    this.crudService.changeEmp(row);
    this.crudService.buttonName = "Update";
  }

  async deleteEmp(aux: Employee) {
    let id = aux.id;
    
    const employeesD$ = this.http.delete<Employee[]>(`http://localhost:3000/employees/`+ id);
    await lastValueFrom(employeesD$);
    const employees$ = this.http.get<Employee[]>("http://localhost:3000/employees/");
    this.empData = await lastValueFrom(employees$);
    this.dataSource = new MatTableDataSource(this.empData);
  }
}



