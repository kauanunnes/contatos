import { Component, OnInit, Input } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent implements OnInit {
  @Input() contato!: Contato
  nome!: string
  email!: string
  tels!: string[]
  constructor() {}

  ngOnInit(): void {
    if(this.contato) {
      this.nome = this.contato.nome
      this.email = this.contato.email
      this.tels = this.contato.tels
      // console.log(this.contato)
    }
  }
}
