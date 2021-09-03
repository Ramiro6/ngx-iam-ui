import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-api',
  templateUrl: './card-api.component.html',
  styleUrls: ['./card-api.component.scss'],
})
export class CardApiComponent {
  constructor(private route: Router, private activateRoute: ActivatedRoute) {
  }

}
