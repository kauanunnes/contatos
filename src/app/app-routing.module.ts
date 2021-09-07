import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { ListaDeContatosComponent } from './views/lista-de-contatos/lista-de-contatos.component';

const routes: Routes = [
  {
    path: '',
    component: ListaDeContatosComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
