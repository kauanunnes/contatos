import { Injectable } from '@angular/core';
import { Contato } from '../models/Contato';

@Injectable({
  providedIn: 'root',
})

export class ContatoService {
  private contacts!: Contato[];
  constructor() {
    const data = window.localStorage.getItem('contacts');
    if (!data) {
      window.localStorage.setItem('contacts', '[]');
      this.contacts = [];
    } else {
      this.contacts = JSON.parse(data).map((contact: Contato) => {
        return contact;
      });
    }
  }

  getContatos(): Contato[] {
    return this.contacts;
  }

  addContato(contato: Contato) {
    console.log(contato);
    console.log(this.contacts);

    this.contacts.push(contato);
    window.localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }
}
