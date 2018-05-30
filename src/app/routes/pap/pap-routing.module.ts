import { AuditReportComponent } from './audit-report/audit-report.component';
import { SpecialPapListComponent } from './special-pap-list/special-pap-list.component';
import { OaRevisePapListComponent } from './oa-revise-pap-list/oa-revise-pap-list.component';
import { QueryPapProComponent } from './query-pap-pro/query-pap-pro.component';
import { UnFinishedPapListComponent } from './un-finished-pap-list/un-finished-pap-list.component';
import { PapProTrackManagementComponent } from './pap-pro-track-management/pap-pro-track-management.component';
import { LetterPapListComponent } from './letter-pap-list/letter-pap-list.component';
import { AllListComponent } from './all-list/all-list.component';
import { AddProComponent } from './add-pro/add-pro.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FinishedPapListComponent } from './finished-pap-list/finished-pap-list.component';
import { VetoPapListComponent } from './veto-pap-list/veto-pap-list.component';

const routes: Routes = [
    { path: 'addPapPro', component: AddProComponent, data: { title: '添加履约项目' } },
    { path: 'allPapList', component: AllListComponent, data: { title: '所有履约项目列表' } },
    { path: 'finishedPapList', component: FinishedPapListComponent, data: { title: '已审批履约项目' } },
    { path: 'letterPapList', component: LetterPapListComponent, data: { title: '已出函履约项目' } },
    { path: 'trackPapList', component: PapProTrackManagementComponent, data: { title: '后期跟踪管理担保项目' } },
    { path: 'unfinishedPapList', component: UnFinishedPapListComponent, data: { title: '未完成履约审批项目' } },
    { path: 'vetoPapList', component: VetoPapListComponent, data: { title: '否决履约项目' } },
    { path: 'queryPapPro', component: QueryPapProComponent, data: { title: '履约项目查询' } },
    { path: 'OaReviseList', component: OaRevisePapListComponent, data: { title: '履约项目OA修改列表' } },
    { path: 'specialPapList', component: SpecialPapListComponent, data: { title: '履约项目特批列表' } },
    { path: 'auditReport/:id', component: AuditReportComponent, data: { title: '审核报告' } },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PapRoutingModule { }
