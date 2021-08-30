import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-lista-de-contatos',
  templateUrl: './lista-de-contatos.component.html',
  styleUrls: ['./lista-de-contatos.component.css'],
})
export class ListaDeContatosComponent implements OnInit {
  contatos: Contato[] = [
    {
      nome: 'Kauã Nunes',
      email: 'kauanunes@gmail.com',
      tels: ['555-5555', '888-8888']
    },
    {
      nome: 'Kaylane Nunes',
      email: 'kaylane@gmail.com',
      tels: ['555-5555']
    },
    {
      nome: 'Maria Nunes',
      email: 'maria@gmail.com',
      tels: ['555-5555']
    },
    {
      nome: 'Tereza Nunes',
      email: 'tereza@gmail.com',
      tels: ['555-5555']
    },
    {
      nome: 'João Nunes',
      email: 'joao@gmail.com',
      tels: ['555-5555']
    },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log(this.contatos)
  }
}
