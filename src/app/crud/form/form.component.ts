import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Country } from '../interfaces/interfaces';
import { lastValueFrom } from 'rxjs';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  countries: string[] = [];
  aux!: any;
  constructor(private http: HttpClient, private crudService: CrudService) { }

  async ngOnInit() {
    await this.getCountries();
  }

  async getCountries() {
    const countries$ = this.http.get<Country[]>("https://restcountries.com/v3.1/all");
    this.aux = await lastValueFrom(countries$);
    for (let i = 0; i < this.aux.length; i++) {
      this.countries[i] = this.aux[i].name.common;
    }
    this.countries.sort();

  }

}
