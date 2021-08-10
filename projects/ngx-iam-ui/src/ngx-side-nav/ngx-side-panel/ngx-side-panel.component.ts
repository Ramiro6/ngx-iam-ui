import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
} from '@angular/core';
import { NgxSideMainComponent } from '../ngx-side-main/ngx-side-main.component';

@Component({
  selector: 'ngx-side-panel',
  templateUrl: './ngx-side-panel.component.html',
  styleUrls: ['./ngx-side-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxSidePanelComponent implements AfterViewInit {
  @ContentChild(NgxSideMainComponent) sideMain: NgxSideMainComponent;
  ngAfterViewInit() {
    console.log('side', this.sideMain);
  }
}
