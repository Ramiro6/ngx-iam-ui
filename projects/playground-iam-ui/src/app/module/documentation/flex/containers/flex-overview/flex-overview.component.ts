import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-overview',
  templateUrl: './flex-overview.component.html',
  styleUrls: ['./flex-overview.component.scss'],
})
export class FlexOverviewComponent {
  constructor(private route: Router, private activateRoute: ActivatedRoute) {
  }

}
