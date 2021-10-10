import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexRoutingModule } from './flex-routing.module';
import { FlexComponent } from './containers/flex/flex.component';
import { NgxTabRouterModule } from '@ngx-iam-ui/components/ngx-tab-router';
import { SharedModule } from '../../shared/shared.module';
import { NgxCardModule } from '@ngx-iam-ui/components/ngx-card';
import { FlexOverviewComponent } from './containers/flex-overview/flex-overview.component';
import { FlexApiComponent } from './containers/flex-api/flex-api.component';
import { FlexExampleComponent } from './containers/flex-example/flex-example.component';
import { NgxDirectiveModule } from '@ngx-iam-ui/components/ngx-directive';

@NgModule({
  declarations: [
    FlexComponent,
    FlexOverviewComponent,
    FlexApiComponent,
    FlexExampleComponent,
  ],
  imports: [
    CommonModule,
    FlexRoutingModule,
    NgxTabRouterModule,
    SharedModule,
    NgxCardModule,
    NgxDirectiveModule,
  ],
})
export class FlexModule {}
