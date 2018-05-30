import { MatterInstructionComponent } from './matter-instruction/matter-instruction.component';
import { TravelApplicationComponent } from './travel-application/travel-application.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { PaymentRequestComponent } from './payment-request/payment-request.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path:'',children:[
        { path: 'paymentRequest', component: PaymentRequestComponent, data: { title: '请款申请待审核' } },
        { path: 'leaveApplication', component: LeaveApplicationComponent, data: { title: '请假申请待审核' } },
        { path: 'travelApplication', component: TravelApplicationComponent, data: { title: '出差申请待审核' } },
        { path: 'matterInstruction', component: MatterInstructionComponent, data: { title: '事项请示待审核' } },
    ]}   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComprehensiveAffairsRoutingModule { }
