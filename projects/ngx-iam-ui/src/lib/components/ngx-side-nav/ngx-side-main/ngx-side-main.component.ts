import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-side-main',
  templateUrl: './ngx-side-main.component.html',
  styleUrls: ['./ngx-side-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxSideMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
