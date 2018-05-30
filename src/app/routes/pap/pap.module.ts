import { PapRoutingModule } from './pap-routing.module';
import { SharedModule } from '@shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddProComponent } from './add-pro/add-pro.component';
import { AllListComponent } from './all-list/all-list.component';
import { FinishedPapListComponent } from './finished-pap-list/finished-pap-list.component';
import { LetterPapListComponent } from './letter-pap-list/letter-pap-list.component';
import { PapProTrackManagementComponent } from './pap-pro-track-management/pap-pro-track-management.component';
import { UnFinishedPapListComponent } from './un-finished-pap-list/un-finished-pap-list.component';
import { VetoPapListComponent } from './veto-pap-list/veto-pap-list.component';
import { QueryPapProComponent } from './query-pap-pro/query-pap-pro.component';
import { OaRevisePapListComponent } from './oa-revise-pap-list/oa-revise-pap-list.component';
import { SpecialPapListComponent } from './special-pap-list/special-pap-list.component';
import { AuditReportComponent } from './audit-report/audit-report.component';
import { FinancialInfoComponent } from './financial-info/financial-info.component';
import { ProApprovalProcessComponent } from './pro-approval-process/pro-approval-process.component';

@NgModule({
    imports: [
        SharedModule,
        PapRoutingModule
    ],
    exports: [RouterModule],
    declarations: [
        AddProComponent,
        AllListComponent,
        FinishedPapListComponent,
        LetterPapListComponent,
        PapProTrackManagementComponent,
        UnFinishedPapListComponent,
        VetoPapListComponent,
        QueryPapProComponent,
        OaRevisePapListComponent,
        SpecialPapListComponent,
        AuditReportComponent,
        FinancialInfoComponent,
        ProApprovalProcessComponent
    ]
})
export class PapModule { }
