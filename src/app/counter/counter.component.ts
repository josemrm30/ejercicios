import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  mode: string = "up";
  count: number = 0;
  interval!: any;

  form: FormGroup = this.fb.group({
    value: [],
    step: []
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form.patchValue({ "value": 0 });
    this.form.patchValue({ "step": 2 });
  }

  start() {
    this.interval = setInterval(() => { this.counter(this.mode) }, 1000);;
  }
  reset() {
    clearInterval(this.interval);
    this.count = this.form.value["value"];
  }
  pause() {
    clearInterval(this.interval);
  }

  up() {
    this.mode = "up";
  }
  down() {
    this.mode = "down";
  }
  counter(mode: string) {
    if (mode === "up") {
      this.count += this.form.value["step"];
    }
    else {
      this.count -= this.form.value["step"];
    }
  }
}

