import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contatos';
  mostrandoCreateContato = false;

  mostrandoModal(situation: boolean) {
    this.mostrandoCreateContato = true
  }
  escondendoModal(sitatuion:boolean) {
    this.mostrandoCreateContato = false;
  }
}
