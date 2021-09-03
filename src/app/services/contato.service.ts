import { Injectable } from '@angular/core';
import { Contato } from '../models/Contato';

const BASE_DE_CONTATOS: Contato[] = [
  {
    nome: 'Mariana Ribeiro 1',
    email: 'mariana@teste.com',
    telefones: ['1111 - 1111', '1111 - 1111', '1111 - 1111'],
  },
  {
    nome: 'Mariana Ribeiro 2',
    email: 'mariana@teste.com',
    telefones: ['2222 - 2222'],
  },
  {
    nome: 'Mariana Ribeiro 3',
    email: 'mariana@teste.com',
    telefones: ['3333 - 3333'],
  },
  {
    nome: 'Mariana Ribeiro 4',
    email: 'mariana@teste.com',
    telefones: ['4444 - 4444'],
  },
  {
    nome: 'Mariana Ribeiro 5',
    email: 'mariana@teste.com',
    telefones: ['5555 - 5555'],
  },
  {
    nome: 'Mariana Ribeiro 6',
    email: 'mariana@teste.com',
    telefones: ['6666 - 6666'],
  },
  {
    nome: 'Mariana Ribeiro 9',
    email: 'mariana@teste.com',
    telefones: ['9999 - 9999'],
  },
  {
    nome: 'Mariana Ribeiro 7',
    email: 'mariana@teste.com',
    telefones: ['7777 - 7777'],
  },
  {
    nome: 'Mariana Ribeiro 8',
    email: 'mariana@teste.com',
    telefones: ['8888 - 8888'],
  },
];

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  private readonly chave: string = 'contacts';
  constructor() {}

  getContatos(): Contato[] {
    const data = window.localStorage.getItem(this.chave);
    if (!data) {
      localStorage.setItem(this.chave, '[]');
      return [];
    } else {
      let contatosCarregados: Contato[] = JSON.parse(data);
      return contatosCarregados;
    }
  }

  addContato(c: Contato): void {
    let contatos = this.getContatos()
    contatos.push(c)
    localStorage.setItem(this.chave, JSON.stringify(contatos))
  }
}
