import { Injectable } from '@angular/core';
import { Contato } from '../models/Contato';

@Injectable({
  providedIn: 'root'
})


export class ContatoService {
  private contacts!:Contato[];
  constructor() {}

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
}
