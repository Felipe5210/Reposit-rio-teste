import { Component } from '@angular/core';
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
export class EditarModeloComponent {
  myForm: FormGroup;
  colecao: Colecao[] = [];  
  
  constructor(
    private criarModeloService: CriarmodeloService,
    private criarColecaoService: CriarColecaoService,
    private activatedRoute: ActivatedRoute
  ) { 
    this.myForm = new FormGroup({
      nomeModelo: new FormControl(''),
      responsavelmodelo: new FormControl(''),
      tipoModelo: new FormControl(''),
      colecao: new FormControl(''),
      possuiBordado: new FormControl(''),
      possuiEstampa: new FormControl(''),
    });
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.criarModeloService.getDataById(id).subscribe(modelo => {
      this.myForm.patchValue({
        nomeModelo: modelo.nomeModelo,
        ResponsavelColecao: modelo.ResponsavelColecao,
        tipoModelo: modelo.tipoModelo,
        colecao: modelo.colecao,
        possuiBordado: modelo.possuiBordado,
        possuiEstampa: modelo.possuiEstampa
      });
    });
    this.dados();
  }

  dados() {
    this.criarColecaoService.getDatas().subscribe((data: any) => {
      this.colecao = data;
    });
  }

  atualizarSubmit(){
    // recupera os valores do formulário
    const nomeModelo = this.myForm.get('nomeModelo')?.value;
    const responsavelmodelo = this.myForm.get('responsavelmodelo')?.value;
    const tipoModelo = this.myForm.get('tipoModelo')?.value;
    const colecao = this.myForm.get('colecao')?.value;
    const possuiBordado = this.myForm.get('possuiBordado')?.value;
    const possuiEstampa = this.myForm.get('possuiEstampa')?.value;

    console.log(possuiBordado)
 
  
    // cria um objeto com os valores recuperados do formulário
    const modeloAtualizado = {
      nomeModelo,
      responsavelmodelo,
      tipoModelo,
      colecao,
      possuiBordado,
      possuiEstampa
    };
  
    // envia o objeto para o serviço de atualização de dados
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.criarModeloService.updateDataById(id, modeloAtualizado).subscribe();

  }
  
}
