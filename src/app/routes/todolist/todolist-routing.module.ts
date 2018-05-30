import { WaitAuditComponent } from './risk/positive-negative/wait-audit/wait-audit.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path:'',children:[
        { path: 'positiveNegativeWaitAudit', component: WaitAuditComponent, data: { title: '待审核正负面名单' } },
        { path: 'comprehensiveAffairs', loadChildren: './comprehensive-affairs/comprehensive-affairs.module#ComprehensiveAffairsModule' },
        { path: 'businessAgent', loadChildren: './business-agent/business-agent.module#BusinessAgentModule' },
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TodolistRoutingModule { }
