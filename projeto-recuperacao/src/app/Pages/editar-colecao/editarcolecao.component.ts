import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CriarColecaoService } from 'src/app/Shared/Services/criarcolecaoservice.service';

@Component({
  selector: 'app-editarcolecao',
  templateUrl: './editarcolecao.component.html',
  styleUrls: ['./editarcolecao.component.scss']
})
export class EditarcolecaoComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private ciarColecaoService: CriarColecaoService,
    private activatedRoute: ActivatedRoute
  ) {
    this.myForm = new FormGroup({
      nomeColecao: new FormControl(''),
      responsavelColecao: new FormControl(''),
      estacao: new FormControl(''),
      marca: new FormControl(''),
      orcamento: new FormControl(''),
      anoLancamento: new FormControl('')
    });
  }
  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.ciarColecaoService.getDataById(id).subscribe(colecao => {
      this.myForm.patchValue({
        nomeColecao: colecao.nomeColecao,
        responsavelColecao: colecao.responsavelColecao,
        estacao: colecao.estacao,
        marca: colecao.marca,
        orcamento: colecao.orcamento,
        anoLancamento: colecao.anoLancamento
      });
    });
  }

  atualizarSubmit(){
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.ciarColecaoService.updateDataById(id, this.myForm.value).subscribe();
    window.location.reload();
  }

  onClick(){
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.ciarColecaoService.deleteDataById(id).subscribe();
    window.location.reload();
  }
}
