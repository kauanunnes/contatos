import { Injectable } from '@angular/core';
import { Contato } from '../models/Contato';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  private contatos: Contato[] = [
    {
      nome: 'Kauã Nunes',
      email: 'kauanunes@gmail.com',
      tels: ['555-5555', '888-8888'],
    },
    {
      nome: 'Kaylane Nunes',
      email: 'kaylane@gmail.com',
      tels: ['555-5555'],
    },
    {
      nome: 'Maria Nunes',
      email: 'maria@gmail.com',
      tels: ['555-5555'],
    },
    {
      nome: 'Tereza Nunes',
      email: 'tereza@gmail.com',
      tels: ['555-5555'],
    },
    {
      nome: 'João Nunes',
      email: 'joao@gmail.com',
      tels: ['555-5555'],
    },
    {
      nome: 'Mariana Nunes',
      email: 'mari@gmail.com',
      tels: ['555-5555'],
    },
  ];
  constructor() {}

  getContatos():Contato[] {
    return this.contatos;
  }

  addContato(contato: Contato):void {
    this.contatos.push(contato)
  }
}
