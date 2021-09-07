import { EventEmitter, Injectable } from '@angular/core';
import { Contato } from '../models/Contato';


@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  private readonly chave: string = 'contacts';

  static onContactsChanged:EventEmitter<Contato[]> = new EventEmitter();
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
    ContatoService.onContactsChanged.emit(contatos)
  }
}
