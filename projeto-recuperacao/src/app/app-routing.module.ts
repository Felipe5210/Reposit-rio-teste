import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaLoginComponent } from "./Pages/tela-login/tela-login.component";
import { TelaRedefinirSenhaComponent } from "./Pages/tela-redefinir-senha/tela-redefinir-senha.component";
import { HomeComponent } from './Pages/home/home.component';
import { ColecoesComponent } from "./Pages/colecoes/colecoes.component";
import { CriarColecaoComponent } from "./Pages/criar-colecao/criar-colecao.component";
import { EditarcolecaoComponent } from "./Pages/editar-colecao/editarcolecao.component";
import { ModelosComponent } from "./Pages/modelos/modelos.component";
import { CriarmodeloComponent } from "./Pages/criarmodelo/criarmodelo.component";
import { EditarModeloComponent } from "./Pages/editar-modelo/editar-modelo.component";
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: TelaLoginComponent
  },
  {
    path: 'redefinirsenha',
    component: TelaRedefinirSenhaComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'criarcolecao',
    component: CriarColecaoComponent
  },
  {
    path: 'colecoes',
    component: ColecoesComponent
  },
  {
    path: 'editarcolecoes/:id',
    component: EditarcolecaoComponent
  },
  {
    path: 'modelos',
    component: ModelosComponent
  },
  {
    path: 'criarmodelo',
    component: CriarmodeloComponent
  },
  {
    path: 'editarmodelo/:id',
    component: EditarModeloComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
