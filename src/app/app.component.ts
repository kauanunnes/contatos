import { Component } from '@angular/core';
import { Contato } from './models/Contato';
import { ContatoService } from './services/contato.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cs:ContatoService = new ContatoService()
  contatos:Contato[] = this.cs.getContatos()
  title = 'contatos';
  mostrandoCreateContato = false;

  mostrandoModal(situation: boolean) {
    this.mostrandoCreateContato = true
  }
  escondendoModal(sitatuion:boolean) {
    this.mostrandoCreateContato = false;

  }

  addContact(contact:Contato) {
    this.contatos.push(contact)
    this.mostrandoCreateContato = false;
    window.localStorage.setItem('contacts', JSON.stringify(this.contatos));

  }
}
