import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-api',
  templateUrl: './flex-api.component.html',
  styleUrls: ['./flex-api.component.scss'],
})
export class FlexApiComponent {
  constructor(private route: Router, private activateRoute: ActivatedRoute) {
  }

}
