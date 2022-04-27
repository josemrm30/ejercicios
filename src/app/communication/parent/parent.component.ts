import { Component } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  sonMessage = "";
  message= "";

  constructor(private communicationService: CommunicationService) { }

  useService(): void {
    this.sonMessage = this.communicationService.parentMessage;
  }

  useInput(): void {
    this.sonMessage = "Parent Using Input";
  }

  outputMsg(msg: string): void {
    this.message = msg;
  }

  useSubject() {
    this.communicationService.parentSubject.subscribe(msg => this.sonMessage = msg);
  }
}
