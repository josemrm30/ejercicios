import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Country, Employee } from '../interfaces/interfaces';
import { lastValueFrom } from 'rxjs';
import { CrudService } from '../services/crud.service';
import { FormBuilder, FormGroup, FormGroupDirective, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  countries: string[] = [];
  aux!: any;
  emp!: Employee;
  buttonName: string = "Add";

  form: FormGroup = this.fb.group({
    //validaciones
    username: [, [Validators.required, Validators.minLength(4)],],
    password: [, [Validators.required],],
    confPassword: [, [Validators.required],],
    email: [, [Validators.required, Validators.email],],
    subscribed: [, [],],
    country: [, [Validators.required],],
    city: [, [Validators.required],],
  });

  constructor(private http: HttpClient, private crudService: CrudService, private fb: FormBuilder) { }

  async ngOnInit() {

    this.crudService.empl.subscribe(emp => {
      this.changeEmp(emp);

    });

    this.crudService.buttonName.subscribe(name => {
      this.changeName(name);
    });
    await this.getCountries();
  }
  changeEmp(emp: Employee) {
    if (emp) {
      this.form.markAsPristine();
      this.emp = emp;
      this.form.patchValue({ username: emp.username })
      this.form.patchValue({ confPassword: emp.password })
      this.form.patchValue({ password: emp.password })
      this.form.patchValue({ email: emp.email })
      this.form.patchValue({ subscribed: emp.subscribed })
      this.form.patchValue({ country: emp.country })
      this.form.patchValue({ city: emp.city })
    }
  }

  changeName(name: string) {
    if (name) {
      this.buttonName = name;
    }
  }

  async getCountries() {
    const countries$ = this.http.get<Country[]>("https://restcountries.com/v3.1/all");
    this.aux = await lastValueFrom(countries$);
    for (let i = 0; i < this.aux.length; i++) {
      this.countries[i] = this.aux[i].name.common;
    }
    this.countries.sort();
  }

  async addEmp(formDirective: FormGroupDirective) {
    console.log(this.form ); //1

    if (this.form.valid) {
      console.log(this.form); //2
      const headers = { "Content-Type": "application/json" };
      if (this.buttonName === "Update") {
        if (!this.form.pristine) {
          console.log(this.form); //3
          this.updateEmp();
          const body = this.emp;
          const employees$ = this.http.put<Employee>("http://localhost:3000/employees/" + this.emp.id, body, { headers });
          await lastValueFrom(employees$);
        }
        else {
          console.log(this.form); //4
          this.form.markAsDirty();
          this.form.markAllAsTouched();
        }
      }
      else {
        console.log(this.form); //5
        const body = this.createEmp();
        const employees$ = this.http.post<Employee>("http://localhost:3000/employees/", body, { headers });
        await lastValueFrom(employees$);
      }
      this.changeName("Add");

      this.form.reset();
      formDirective.resetForm();
      console.log(this.form);
      

    }
    else {
      let aux = Object.keys(this.form.controls);
      for (let index = 0; index < aux.length; index++) {
        console.log("The " + aux[index] + " field is " + JSON.stringify(this.form.controls[aux[index]].errors));



      }


    }
  }
  updateEmp() {
    const aux = this.form.value;
    this.emp.username = aux.username;
    this.emp.email = aux.email;
    this.emp.password = aux.password;
    this.emp.subscribed = aux.subscribed;
    this.emp.country = aux.country;
    this.emp.city = aux.city;
  }

  createEmp(): Employee {
    const aux = this.form.value;
    let emp: Employee = {
      "id": Math.floor(Math.random() * (100000 - 0)) + 0,
      ...aux
    };

    return emp;
  }
}

