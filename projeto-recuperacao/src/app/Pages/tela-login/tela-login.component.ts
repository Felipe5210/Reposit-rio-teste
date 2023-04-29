import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss']
})
export class TelaLoginComponent {
 // passa texto para o componente button
 loginButtonText: string = 'Entrar';
 ngForm: any;
 email: string | undefined;
 password: string | undefined;
 
 constructor() {}

 ngOnInit(): void {}
}
