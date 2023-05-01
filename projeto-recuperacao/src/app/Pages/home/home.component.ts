import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, forkJoin, map, switchMap,} from 'rxjs';
import { Colecao } from 'src/app/Shared/Interface/Colecao';
import { CriarColecaoService } from 'src/app/Shared/Services/criarcolecaoservice.service';
import { CriarmodeloService } from 'src/app/Shared/Services/criarmodelo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cardTitleColecoes = 'Card Dashboard';
  cardTitleModelos = 'Modelos';
  cardTitleOrcamento = 'Orçamento Médio (R$)';
  colecoes: Colecao[] = [];


  colecoesCardValue: Observable<number> | undefined;
  modelosCardValue: Observable<number> | undefined;
  OrcamentoCardValue: Observable<number> | undefined;
  id: Observable<number> | undefined;

  
  constructor(private criarColecaoService:CriarColecaoService,
     private criarModeloService: CriarmodeloService,private router: Router ) { }


  ngOnInit(): void {
    this.id = this.criarColecaoService.getDatas().pipe(
      map((data: any) => data.length)
    );
    this.colecoesCardValue = this.colecoesNumero();
    this.modelosCardValue = this.modelosNumero();
    this.OrcamentoCardValue = this.orcamentoMedio();

    this.getData();
  }
  // pega todas as coleções e modelos e imprimi no console
  getData(): void {
    this.criarColecaoService.getDatas().subscribe((data: any) => {
      this.colecoes = data;
      console.log(this.colecoes);
    });
  }


  colecoesNumero(): Observable<number> {
    return this.criarColecaoService.getDatas().pipe(
      map((data: any) => data.length)
    );
  }

  modelosNumero(): Observable<number> {
    return this.criarModeloService.getDatas().pipe(
      map((data: any) => data.length)
    );
  }

  orcamentoMedio(): Observable<number> {
    return this.criarColecaoService.getDatas().pipe(
      map((data: any) => {
        const orcamentos = data.map((item: { orcamento: { toString: () => string; }; }) => parseFloat(item.orcamento.toString().replace(',', '.')));
        const somaOrcamentos = orcamentos.reduce((acc: any, curr: any) => acc + curr, 0);
        const mediaOrcamentos = somaOrcamentos / data.length;
        return mediaOrcamentos;
      })
    );
  }

}








