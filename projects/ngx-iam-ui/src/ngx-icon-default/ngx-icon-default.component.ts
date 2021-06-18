import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SecurityContext,
  SimpleChanges,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxRegistrationService } from './ngx-registration.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export type typeIcon = 'arrow';

@Component({
  selector: 'ngx-icon-default',
  template: ``,
  styles: [
    `
      :host {
        padding-left: 5px;
        padding-right: 5px;
      }
    `,
  ],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '(click)': 'rotate()',
    '[@openClose]': 'state ? "open" : "close"',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('openClose', [
      state('open', style({ transform: 'rotate(0)' })),
      state('close', style({ transform: 'rotate(-90deg)' })),
      transition('close => open', animate('100ms ease-out')),
      transition('open => close', animate('100ms ease-in')),
    ]),
  ],
})
export class NgxIconDefaultComponent implements OnChanges {
  constructor(
    public el: ElementRef,
    private _sanitizer: DomSanitizer,
    private registrationService: NgxRegistrationService
  ) {}
  private _icon: typeIcon;
  state: boolean = false;
  @Input() set icon(iconName: typeIcon) {
    this._icon = iconName;
  }
  get icon(): typeIcon {
    return this._icon;
  }
  private _animationState: boolean;
  @Input() set animationState(state: boolean) {
    this._animationState = state;
  }
  get animationState(): boolean {
    return this._animationState;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['icon']) this.renderIcon();
  }

  private renderIcon(): void {
    const setIcon = this.registrationService.getIcon(this._icon);
    if (setIcon) this._renderSvg(setIcon);
  }

  private _renderSvg(svg: any): void {
    const svgSanitize = this._sanitizer.sanitize(SecurityContext.HTML, svg);
    this.el.nativeElement.innerHTML = svgSanitize;
  }

  rotate() {
    debugger;
    // this.state = this.state === 'open' ? 'close' : 'open';
    // console.log(this.state);
  }
}
