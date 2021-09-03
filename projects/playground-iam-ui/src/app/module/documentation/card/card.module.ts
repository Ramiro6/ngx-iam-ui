import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './containers/card/card.component';
import { NgxTabRouterModule } from '@ngx-iam-ui/components/ngx-tab-router';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, CardRoutingModule, NgxTabRouterModule],
})
export class CardModule {}
