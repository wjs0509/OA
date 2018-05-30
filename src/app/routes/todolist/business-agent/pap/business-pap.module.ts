import { ToBeAuditedComponent } from './to-be-audited/to-be-audited.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { BusinessPapRoutingModule } from './business-pap-routing.module';
import { ToApprovalComponent } from './to-approval/to-approval.component';
import { ToOaModifyComponent } from './to-oa-modify/to-oa-modify.component';


const COMPONENT_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    BusinessPapRoutingModule
  ],
  declarations: [
      ...COMPONENT_NOROUNT,
      ToBeAuditedComponent,
      ToApprovalComponent,
      ToOaModifyComponent,
  ],
  entryComponents: COMPONENT_NOROUNT
})
export class BusinessPapModule { }
