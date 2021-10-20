import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './views/menu/menu.component';
import { ListaDeContatosComponent } from './views/lista-de-contatos/lista-de-contatos.component';
import { ContatoComponent } from './views/contato/contato.component';
import { CreateContatoComponent } from './views/create-contato/create-contato.component';
import { AboutComponent } from './views/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaDeContatosComponent,
    ContatoComponent,
    CreateContatoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
          
}
