import { Component, Input, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-lista-de-contatos',
  templateUrl: './lista-de-contatos.component.html',
  styleUrls: ['./lista-de-contatos.component.css'],
})
export class ListaDeContatosComponent implements OnInit {
  private cs:ContatoService = new ContatoService()
  @Input() contatos!:Contato[];
  constructor() {
  }

  ngOnInit(): void {}
}
