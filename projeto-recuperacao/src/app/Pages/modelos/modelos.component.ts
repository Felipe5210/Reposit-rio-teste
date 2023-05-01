import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Modelos } from 'src/app/Shared/Interface/modelos';
import { CriarColecaoService } from 'src/app/Shared/Services/criarcolecaoservice.service';
import { Observable, map } from 'rxjs';
import { CriarmodeloService } from 'src/app/Shared/Services/criarmodelo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.scss']
})
export class ModelosComponent implements OnInit {

  modelos: Modelos[] = [];
  id: Observable<number> | undefined;
  nomeDoModelo: Observable<string> | undefined;

  constructor(private criarModeloService: CriarmodeloService, private router: Router) { }

  ngOnInit(): void { 
    this.dados();
    console.log(this.modelos)
  }

//  async dados() {
//    this.criarModeloService.getDatas().subscribe((data: any) => {
//     console.log(data)
//   });
//   }


  async dados() {
    const modelos: any = await this.criarModeloService.getDatas().toPromise();
    const modelosComColecoes = await Promise.all(
      modelos.map(async (modelo:any) => {
        const colecoes = await this.criarModeloService
          .getDatas()
          .toPromise()
          .then((colecoes:any) =>
            colecoes.filter(
              (colecao:any) => colecao.selecionarModelo === modelo.nomeModelo
            )
          );

        const colecao = colecoes.length > 0 ? colecoes[0].id : "Sem colecao";
        return {
          id: modelo.id,
          nomeDoModelo: modelo.nomeModelo,
          responsavelmodelo: modelo.responsavelmodelo,
          selecionarColecao: colecao,
        };
      }

    ))
    this.modelos = modelosComColecoes;
  }



  onClick(modelo:any): void {
    this.router.navigate(['/editarmodelo', modelo.id]);
  }
}

    



