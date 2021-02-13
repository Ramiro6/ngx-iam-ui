import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-side-aside',
  templateUrl: './ngx-side-aside.component.html',
  styleUrls: ['./ngx-side-aside.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxSideAsideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
