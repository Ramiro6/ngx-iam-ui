import { Component } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent {
  state: boolean;
  items: string[] = ['', '', ''];

  onChangeState(getState: boolean): void {
    debugger;
    this.state = getState;
  }
}
