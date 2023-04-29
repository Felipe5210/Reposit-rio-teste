import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Modelos } from 'src/app/Shared/Interface/modelos';
import { CriarColecaoService } from 'src/app/Shared/Services/criarcolecaoservice.service';
import { Observable, map } from 'rxjs';
import { CriarmodeloService } from 'src/app/Shared/Services/criarmodelo.service';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.scss']
})
export class ModelosComponent implements OnInit {

  modelos: Modelos[] = [];
  id: Observable<number> | undefined;
  nomeDoModelo: Observable<string> | undefined;

  constructor(private criarModeloService: CriarmodeloService) { }

  ngOnInit(): void { 
    this.id = this.criarModeloService.getDatas().pipe(
      map((data: any) => data.length)
    );
    this.modelosNome();
  }

  modelosNome() {
    this.criarModeloService.getDatas().subscribe((data: any) => {
      this.modelos = data;
    });
  }
 
  dados(): Observable<Modelos[]> {
    return this.criarModeloService.getDatas().pipe(
      map((data: any) => {
        return data.map((item: any) => {
          return {
            id: item.id,
            nome: item.nome,
            responsavel: item.responsavel
          };
        });
      })
    );
  }
}

    



