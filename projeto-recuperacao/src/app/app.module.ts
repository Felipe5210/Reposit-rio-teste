import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaLoginComponent } from 'src/app/Pages/tela-login/tela-login.component';
import { TelaRedefinirSenhaComponent } from 'src/app/Pages/tela-redefinir-senha/tela-redefinir-senha.component';
import { HomeComponent } from 'src/app/Pages/home/home.component';
import { MenuLateralComponent } from 'src/app/Components/menu-lateral/menu-lateral.component';
import { CardDashboardComponent } from 'src/app/Components/card-dashboard/card-dashboard.component';
import { CriarColecaoComponent } from 'src/app/Pages/criar-colecao/criar-colecao.component';
import { ColecoesComponent } from 'src/app/Pages/colecoes/colecoes.component';
import { EditarcolecaoComponent } from 'src/app/Pages/editar-colecao/editarcolecao.component';
import { ModelosComponent } from 'src/app/Pages/modelos/modelos.component';
import { CriarmodeloComponent } from 'src/app/Pages/criarmodelo/criarmodelo.component';
import { EditarModeloComponent } from 'src/app/Pages/editar-modelo/editar-modelo.component';


@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    TelaRedefinirSenhaComponent,
    HomeComponent,
    MenuLateralComponent,
    CardDashboardComponent,
    CriarColecaoComponent,
    ColecoesComponent,
    EditarcolecaoComponent,
    ModelosComponent,
    CriarmodeloComponent,
    EditarModeloComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }