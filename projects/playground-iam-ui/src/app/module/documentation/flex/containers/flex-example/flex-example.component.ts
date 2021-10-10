import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-example',
  templateUrl: './flex-example.component.html',
  styleUrls: ['./flex-example.component.scss'],
})
export class FlexExampleComponent {
  constructor(private route: Router, private activateRoute: ActivatedRoute) {
  }

}
