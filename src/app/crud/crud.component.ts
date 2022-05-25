import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { reduce } from 'rxjs';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {


  constructor(private snackBar: MatSnackBar) { }

  timeOut = 100500;

  openSnackBar(message: any, action: string) {
    if (message instanceof Array) {

      message.forEach((message, index) => {

        setTimeout(() => {

          this.snackBar.open(message.text, action, {
            duration: this.timeOut,
            verticalPosition: 'bottom', // 'top' | 'bottom'
            horizontalPosition: 'end', //'start' | 'center' | 'end' | 'left' | 'right'
            panelClass: ["error-snackbar"],
           
          });


        }, index * (this.timeOut + 500)); // 500 - timeout between two messages

      });


    } else {

      this.snackBar.open("hola", "hola", {
        duration: this.timeOut,
        verticalPosition: 'top', // 'top' | 'bottom'
        horizontalPosition: 'end', //'start' | 'center' | 'end' | 'left' | 'right';
        panelClass: ['error-snackbar'],
      });

    }
  }

}
