import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.scss']
})
export class CardDashboardComponent {

  @Input() cardTitle: String | undefined 
  @Input() cardValue: Observable<number> | undefined
 
  constructor() { }
  ngOnInit(): void {
    
  }
}
