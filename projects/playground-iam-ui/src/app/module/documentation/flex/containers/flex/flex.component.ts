import { Component } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.scss'],
})
export class FlexComponent {
  constructor(private route: Router, private activateRoute: ActivatedRoute) {
    this.activateRoute.data.subscribe({
      next: (value: Data) => console.log('Data', value.name),
    });
  }
}
