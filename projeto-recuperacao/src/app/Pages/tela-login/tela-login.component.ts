import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss']
})
export class TelaLoginComponent implements OnInit {
 // passa texto para o componente button
  loginButtonText: string = 'Entrar';

  constructor(private router: Router) {}

  ngOnInit(): void {}
  onClick(){
    this.router.navigate(['/home']);
  }
}