import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { CriarmodeloService } from 'src/app/Shared/Services/criarmodelo.service';
import { CriarColecaoComponent } from '../criar-colecao/criar-colecao.component';
import { CriarColecaoService } from 'src/app/Shared/Services/criarcolecaoservice.service';

@Component({
  selector: 'app-criarmodelo',
  templateUrl: './criarmodelo.component.html',
  styleUrls: ['./criarmodelo.component.scss']
})
export class CriarmodeloComponent {
  myForm!: FormGroup; 
  criarmodeloService: any;
  colecoes: any[] | undefined;
  constructor(private criarModeloService: CriarmodeloService, private criarColecaoService: CriarColecaoService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      nomeDoModelo: new FormControl(),
      tipoModelo: new FormControl(),
      selecionarColecao: new FormControl(),
      responsavelmodelo: new FormControl(),
      possuiBordado: new FormControl(),
      possuiEstampa: new FormControl()
    });
    this.getDatas();
  }


  atualizarSelecionarColecao(event: Event) {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    this.myForm.get('selecionarColecao')?.setValue(value);
  }

  onSubmit() {
    this.criarModeloService.saveData(this.myForm.value).subscribe((data: any) => { console.log(data);});
    window.location.reload();
  }

  // pega os nomeColecao do json na tabela de criarcolecao e popula as opções do select
  getDatas() {
    this.criarColecaoService.getDatas().subscribe((data: any) => {
      this.colecoes = data.map((item: any) => {
        return item.nomeColecao;
      });
    });
  }
  
}
