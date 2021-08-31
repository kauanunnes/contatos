import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {
  @Output() handleDisapearModal = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  escondendoModal() {
    // (eventEmitter)="escondendoModal($event)"
    this.handleDisapearModal.emit()
  }
}
