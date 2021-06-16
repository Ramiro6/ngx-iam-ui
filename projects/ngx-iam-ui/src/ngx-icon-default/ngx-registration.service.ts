import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgxTypeIcon, NgxTypeIconEnum } from './ngx-all-icons';

@Injectable({
  providedIn: 'root',
})
export class NgxRegistrationService {
  private _icons: Map<string, SafeHtml> = new Map<string, SafeHtml>();
  constructor(private _sanitizer: DomSanitizer) {
    Object.keys(NgxTypeIconEnum).forEach((icon: string) => {
      this._icons.set(
        icon,
        this._sanitizer.bypassSecurityTrustHtml(
          (NgxTypeIconEnum as NgxTypeIcon)[icon]
        )
      );
    });
  }

  getIcon(iconName: string) {
    return this._icons.get(iconName);
  }
}
