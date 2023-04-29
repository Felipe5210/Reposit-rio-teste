import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CriarColecaoService } from 'src/app/Shared/Services/criarcolecaoservice.service';


@Component({
  selector: 'app-criar-colecao',
  templateUrl: './criar-colecao.component.html',
  styleUrls: ['./criar-colecao.component.scss']
})
export class CriarColecaoComponent implements OnInit {
    getDatas() {
      throw new Error('Method not implemented.');
    }
    myForm!: FormGroup;
    CriarColecaoService: any;

    constructor(private dataService: CriarColecaoService) { }

    ngOnInit() {
      this.myForm = new FormGroup({
        id: new FormControl(
          Math.floor(Math.random() * 1000) + 1
        ),
        nomeColecao: new FormControl(),
        responsavelColecao: new FormControl(),
        estacao: new FormControl(),
        marca: new FormControl(),
        orcamento: new FormControl(),
        anoLancamento: new FormControl(),
      });
    }
  
    
    onSubmit() {
      this.dataService.saveData(this.myForm.value).subscribe((data: any) => { console.log(data);});
      window.location.reload();
    }
  }




