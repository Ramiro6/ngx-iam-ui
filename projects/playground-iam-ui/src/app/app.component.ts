import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'playground-iam-ui';
  checkedValue: boolean = false;

  onChangeModel(typeEvent: any): void {
    console.log(typeEvent);
  }
}
