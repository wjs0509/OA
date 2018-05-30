import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { BusinessAgentRoutingModule } from './business-agent-routing.module';


const COMPONENT_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    BusinessAgentRoutingModule
  ],
  declarations: [
      ...COMPONENT_NOROUNT
  ],
  entryComponents: COMPONENT_NOROUNT
})
export class BusinessAgentModule { }
