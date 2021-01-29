import {ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {colorType} from '../../directives/color-by-type.directive';


const COUNTER_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgxToggleSwitchComponent),
  multi: true
};

@Component({
  selector: 'ngx-toggle-switch',
  styleUrls: ['./ngx-toggle-switch.component.scss'],
  template: `
    <label class="ngx-switch__box">
      <input type="checkbox" [checked]="checked" (click)="onCLickToggle()">
      <span class="slider round" ngxSetColor [getColor]="ngxColor"></span>
    </label>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [COUNTER_CONTROL_ACCESSOR],
})

export class NgxToggleSwitchComponent implements ControlValueAccessor, OnInit {
  @Input() ngxColor: colorType;
  checked: boolean;

  private onChangeCallback = (_: any) => {};
  private onTouchedCallback = () => {};
  constructor( private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log('hey');
    // this.isRed = true;
  }

  writeValue(value): void {
    console.log('write value', value);
    if (value === null) {
      this.checked = false;
    } else {
      this.checked = value;
      this.cdr.markForCheck();
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  onCLickToggle(): void {
    this.checked = !this.checked;
    this.onChangeCallback(this.checked);
    this.onTouchedCallback();
  }
}
