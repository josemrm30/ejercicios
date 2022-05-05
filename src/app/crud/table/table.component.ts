import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  EmpData!: Employee[];
  dataSource: any;
  constructor(private http: HttpClient, private crudService: CrudService) {

  }

  async ngOnInit() {
    await this.getEmployees();
  }

  displayedColumns: string[] = ['Username', 'Email', 'Subscribed', 'Country', 'City', 'Action'];


  async getEmployees() {
    const employees$ = this.http.get<Employee[]>("http://localhost:3000/employees/");
    this.EmpData = await lastValueFrom(employees$);
    this.dataSource = new MatTableDataSource(this.EmpData);
  }

  rowSelected(row: Employee){
    this.crudService.rowSelected(row);
  }
}



