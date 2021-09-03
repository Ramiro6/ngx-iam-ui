import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './containers/card/card.component';
import { NgxTabRouterModule } from '@ngx-iam-ui/components/ngx-tab-router';
import { SharedModule } from '../../shared/shared.module';
import { NgxCardModule } from '@ngx-iam-ui/components/ngx-card';
import { CardOverviewComponent } from './containers/card-overview/card-overview.component';
import { CardApiComponent } from './containers/card-api/card-api.component';
import { CardExampleComponent } from './containers/card-example/card-example.component';
import { NgxCardPageModule } from '@ngx-iam-ui/components/ngx-card-page';
import { NgxDirectiveModule } from '../../../../../../ngx-iam-ui/src/ngx-directive/ngx-directives.module';

@NgModule({
  declarations: [
    CardComponent,
    CardOverviewComponent,
    CardApiComponent,
    CardExampleComponent,
  ],
  imports: [
    CommonModule,
    CardRoutingModule,
    NgxTabRouterModule,
    SharedModule,
    NgxCardModule,
    NgxDirectiveModule,
    NgxCardPageModule,
  ],
})
export class CardModule {}
