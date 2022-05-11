import { HttpClient } from '@angular/common/http';
import { Component, OnInit, DoCheck } from '@angular/core';
import { Country, Employee } from '../interfaces/interfaces';
import { lastValueFrom } from 'rxjs';
import { CrudService } from '../services/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, DoCheck {

  countries: string[] = [];
  aux!: any;
  emp!: Employee;
  buttonName: string = "Add";
  form: FormGroup = this.fb.group({
    //validaciones
    usuario: [, [Validators.required],],
    password: [, [Validators.required]],
    confPassword: [, [Validators.required]],
    email: [, [Validators.required]],
    subscribed: [, [Validators.required]],
    country: [, [Validators.required]],
    city: [, [Validators.required]]
  });

  constructor(private http: HttpClient, private crudService: CrudService, private fb: FormBuilder) { }

  ngDoCheck(): void {
    if (this.emp && this.form.pristine) { //TODO
      this.buttonName = this.crudService.buttonName;
      this.form.patchValue({ usuario: this.emp.Username })
      this.form.patchValue({ confPassword: this.emp.Password })
      this.form.patchValue({ password: this.emp.Password })
      this.form.patchValue({ email: this.emp.Email })
      this.form.patchValue({ subscribed: this.emp.Subscribed }) //Check best solution
      this.form.patchValue({ country: this.emp.Country }) //TODO
      this.form.patchValue({ city: this.emp.City })
    }
  }

  async ngOnInit() {
    this.crudService.empl.subscribe(msg => this.emp = msg);
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

  async addEmp() {
    if (this.buttonName === "Update") {
      const headers = { "Content-Type": "application/json" };
      const body = this.form.value;
      this.form.reset(); 
      console.log(body);
      

      const employees$ = this.http.put<Employee>("http://localhost:3000/employees/" + this.emp.id, body, { headers });
      await lastValueFrom(employees$);
      this.crudService.buttonName = "Add";
    }
  }

}
