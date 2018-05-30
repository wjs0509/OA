import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PaymentRequestComponent } from './payment-request/payment-request.component';
import { ComprehensiveAffairsRoutingModule } from './comprehensive-affairs-routing.module';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { TravelApplicationComponent } from './travel-application/travel-application.component';
import { MatterInstructionComponent } from './matter-instruction/matter-instruction.component';


const COMPONENT_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    ComprehensiveAffairsRoutingModule
  ],
  declarations: [
      ...COMPONENT_NOROUNT,
      PaymentRequestComponent,
      LeaveApplicationComponent,
      TravelApplicationComponent,
      MatterInstructionComponent,
  ],
  entryComponents: COMPONENT_NOROUNT
})
export class ComprehensiveAffairsModule { }
