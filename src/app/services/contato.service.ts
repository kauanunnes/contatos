import { EventEmitter, Injectable } from '@angular/core';
import { Contato } from '../models/Contato';

@Injectable({
  providedIn: 'root',
})

export class ContatoService {
  private contacts!: Contato[];
  static onContactsChanged:EventEmitter<Contato[]> = new EventEmitter();
  constructor() {

  }

  getContatos(): Contato[] {
    const data = window.localStorage.getItem('contacts');
    if (!data) {
      window.localStorage.setItem('contacts', '[]');
      this.contacts = [];
    } else {
      this.contacts = JSON.parse(data).map((contact: Contato) => {
        return contact;
      });
    }
    return this.contacts;
  }

  addContato(contato: Contato) {
    let contatos = this.getContatos()
    contatos.push(contato);
    window.localStorage.setItem('contacts', JSON.stringify(contatos));
    this.contacts = contatos;
    ContatoService.onContactsChanged.emit(contatos)
  }
}
