import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CriarColecaoService } from 'src/app/Shared/Services/criarcolecaoservice.service';

@Component({
  selector: 'app-editarcolecao',
  templateUrl: './editarcolecao.component.html',
  styleUrls: ['./editarcolecao.component.scss']
})
export class EditarcolecaoComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private criarColecaoService: CriarColecaoService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
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

    this.myForm = this.fb.group({
      nomeColecao: ['', Validators.required],
      responsavelColecao: ['', Validators.required],
      estacao: ['', Validators.required],
      marca: ['', Validators.required],
      orcamento: ['', Validators.required],
      anoLancamento: ['', Validators.required]
    });

    this.criarColecaoService.getDataById(id).subscribe(colecao => {
      this.myForm.patchValue(colecao);
    });
  }

  atualizarSubmit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.criarColecaoService.updateDataById(id, this.myForm.value).subscribe(() => {
      window.location.reload();
    });
  }

  onClick(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.criarColecaoService.deleteDataById(id).subscribe(() => {
      window.location.reload();
    });
  }
}

