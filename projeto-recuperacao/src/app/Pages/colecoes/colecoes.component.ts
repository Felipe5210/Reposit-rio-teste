import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tabela } from 'src/app/Shared/Interface/table';
import { CriarColecaoService } from 'src/app/Shared/Services/criarcolecaoservice.service';
import { CriarmodeloService } from 'src/app/Shared/Services/criarmodelo.service';

@Component({
  selector: 'app-colecoes',
  templateUrl: './colecoes.component.html',
  styleUrls: ['./colecoes.component.scss']
})
export class ColecoesComponent {
modelos: Tabela[] = [];
  constructor(private criarColecaoService:CriarColecaoService,
    private criarModeloService: CriarmodeloService,private router: Router) { }

  ngOnInit(): void {
    this.dados();
  }

  async dados() {
    const colecoes: any = await this.criarColecaoService.getDatas().toPromise();
  
    const colecoesComModelos = await Promise.all(
      colecoes.map(async (colecao:any) => {
        const modelos = await this.criarModeloService
          .getDatas()
          .toPromise()
          .then((modelos:any) =>
            modelos.filter(
              (modelo:any) => modelo.selecionarColecao === colecao.nomeColecao
            )
          );
  
        const modelo = modelos.length > 0 ? modelos[0].id : "Sem modelo";
        return {
          orcamento: colecao.orcamento,
          responsavel: colecao.responsavelColecao,
          colecao: colecao.nomeColecao,
          modelos: modelo,
          id: colecao.id,
        };
      })
    );
    this.modelos = colecoesComModelos;
  }
  
  onClick(colecao:any): void {
    this.router.navigate(['/editarcolecoes', colecao.id]);
  }
}
