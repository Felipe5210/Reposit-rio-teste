import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['/login']);
  }

}
