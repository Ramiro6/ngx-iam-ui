import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-overview',
  templateUrl: './card-overview.component.html',
  styleUrls: ['./card-overview.component.scss'],
})
export class CardOverviewComponent {
  constructor(private route: Router, private activateRoute: ActivatedRoute) {
  }

}
