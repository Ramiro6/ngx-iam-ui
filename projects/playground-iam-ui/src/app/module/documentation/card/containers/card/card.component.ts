import { Component } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor(private route: Router, private activateRoute: ActivatedRoute) {
    this.activateRoute.data.subscribe({
      next: (value: Data) => console.log('Data', value.name),
    });
  }
}
