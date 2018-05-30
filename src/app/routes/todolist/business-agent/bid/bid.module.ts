import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { BidRoutingModule } from './bid-routing.module';
import { ToAuditComponent } from './to-audit/to-audit.component';
import { ToOaModifyComponent } from './to-oa-modify/to-oa-modify.component';


const COMPONENT_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    BidRoutingModule
  ],
  declarations: [
      ...COMPONENT_NOROUNT,
      ToAuditComponent,
      ToOaModifyComponent
  ],
  entryComponents: COMPONENT_NOROUNT
})
export class BidModule { }
