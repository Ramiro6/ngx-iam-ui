import { Component, Input } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'pg-title-panel',
  templateUrl: './pg-title-panel.component.html',
  styleUrls: ['./pg-title-panel.component.scss'],
})
export class PgTitlePanelComponent {
  private _currentRouteName: Observable<Data>;
  constructor(private activateRoute: ActivatedRoute) {
    this._currentRouteName = this.activateRoute.data;
  }

  get currentRouteName(): Observable<string> {
    return this._currentRouteName.pipe(pluck('name'));
  }
}
