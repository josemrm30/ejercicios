import { Component, Input, OnChanges, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnChanges {

  @Input() message: string = "";
  @Output() parentMessage: EventEmitter<string> = new EventEmitter<string>();


  constructor(private communicationService: CommunicationService) { }

  useService(): void {
    this.parentMessage.emit("Son Using Service");
  }

  useOutput(): void{
    this.parentMessage.emit("Son Using Output")
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  useSubject(){
    this.communicationService.sonSubject.subscribe(msg => this.parentMessage.emit(msg));
  }
}
