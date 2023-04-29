import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar-modelo',
  templateUrl: './editar-modelo.component.html',
  styleUrls: ['./editar-modelo.component.scss']
})
export class EditarModeloComponent {
  constructor() { }

  myForm!: FormGroup;
}
