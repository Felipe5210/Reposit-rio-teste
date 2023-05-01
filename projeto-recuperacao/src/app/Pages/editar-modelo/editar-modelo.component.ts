import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Colecao } from 'src/app/Shared/Interface/Colecao';
import { CriarColecaoService } from 'src/app/Shared/Services/criarcolecaoservice.service';
import { CriarmodeloService } from 'src/app/Shared/Services/criarmodelo.service';

@Component({
  selector: 'app-editar-modelo',
  templateUrl: './editar-modelo.component.html',
  styleUrls: ['./editar-modelo.component.scss']
})
export class EditarModeloComponent implements OnInit {
  myForm = new FormGroup({
    nomeModelo: new FormControl(''),
    responsavelmodelo: new FormControl(''),
    tipoModelo: new FormControl(''),
    colecao: new FormControl(''),
    possuiBordado: new FormControl(false),
    possuiEstampa: new FormControl(false),
    selecionarColecao: new FormControl('')
  });
  colecao: Colecao[] = [];

  constructor(
    private criarModeloService: CriarmodeloService,
    private criarColecaoService: CriarColecaoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.criarModeloService.getDataById(id).subscribe(modelo => {
      this.myForm.patchValue({
        nomeModelo: modelo.nomeModelo,
        responsavelmodelo: modelo.responsavelmodelo,
        tipoModelo: modelo.tipoModelo,
        colecao: modelo.colecao,
        possuiBordado: modelo.possuiBordado,
        possuiEstampa: modelo.possuiEstampa,
        selecionarColecao: modelo.colecao
      });
    });
    this.dados();
  }

  dados() {
    this.criarColecaoService.getDatas().subscribe((data: any) => {
      this.colecao = data;
      console.log(this.colecao)
    });
  }

  atualizarSubmit(): void {
    const modeloAtualizado = {
      nomeModelo: this.myForm.value.nomeModelo,
      responsavelmodelo: this.myForm.value.responsavelmodelo,
      tipoModelo: this.myForm.value.tipoModelo,
      colecao: this.myForm.value.colecao,
      possuiBordado: this.myForm.value.possuiBordado,
      possuiEstampa: this.myForm.value.possuiEstampa,
      selecionarColecao: this.myForm.value.selecionarColecao
    };

    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.criarModeloService.updateDataById(id, modeloAtualizado).subscribe();
  }
}
