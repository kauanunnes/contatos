import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {
  @Output() handleDisapearModal = new EventEmitter()
  @Output() handleAdd = new EventEmitter()
  private cs:ContatoService = new ContatoService()
  novoContato:Contato = {
    nome: '',
    email: '',
    tels:[''],
  };

  constructor() { }

  ngOnInit(): void {
  }

  escondendoModal() {
    // (eventEmitter)="escondendoModal($event)"
    this.handleDisapearModal.emit()
  }

  addTel() {
    this.novoContato.tels.push('')
  }
  removeTel(index:number) {
    this.novoContato.tels.splice(index, 1)
  }
  track(index: number, value: string):number {
    return index
  }
  handleAddContato(contact: Contato) {
    if (!this.novoContato.nome) return
    this.handleAdd.emit(contact)

  }
}
