import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.css']
})
export class LightSwitchComponent implements OnInit {

  colors: string[] = ["Green", "Yellow", "Red"];

  form: FormGroup = this.fb.group({
    light: [],
    checked: []
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form.patchValue({ "light": "Green" });;
    this.form.patchValue({ "checked": true })
  }

}
