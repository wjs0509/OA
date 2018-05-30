import { VetoFactoringListComponent } from './veto-factoring-list/veto-factoring-list.component';
import { UnfinishedFactoringListComponent } from './unfinished-factoring-list/unfinished-factoring-list.component';
import { TrackFactoringListComponent } from './track-factoring-list/track-factoring-list.component';
import { LetterFactoringListComponent } from './letter-factoring-list/letter-factoring-list.component';
import { FinishedFactoringListComponent } from './finished-factoring-list/finished-factoring-list.component';
import { AllFactoringListComponent } from './all-factoring-list/all-factoring-list.component';
import { AddFactoringComponent } from './add-factoring/add-factoring.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OaReviseFactoringListComponent } from './oa-revise-factoring-list/oa-revise-factoring-list.component';
import { SpecialFactoringListComponent } from './special-factoring-list/special-factoring-list.component';

const routes: Routes = [
    {
        path: '', children: [
            { path: 'addFactoring', component: AddFactoringComponent, data: { title: '添加保理项目' } },
            { path: 'allFactoringList', component: AllFactoringListComponent, data: { title: '所有保理项目列表' } },
            { path: 'finishedFactoringList', component: FinishedFactoringListComponent, data: { title: '已审批保理项目' } },
            { path: 'letterFactoringList', component: LetterFactoringListComponent, data: { title: '已出函保理项目' } },
            { path: 'trackFactoringList', component: TrackFactoringListComponent, data: { title: '保理后期跟踪管理项目' } },
            { path: 'unfinishedFactoringList', component: UnfinishedFactoringListComponent, data: { title: '未完成保理审批项目' } },
            { path: 'vetoFactoringList', component: VetoFactoringListComponent, data: { title: '否决保理项目' } },
            { path: 'OaReviseFactoringList', component: OaReviseFactoringListComponent, data: { title: 'OA修改保理项目列表' } },
            { path: 'specialFactoringList', component: SpecialFactoringListComponent, data: { title: '保理项目特批列表' } },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FactoringRoutingModule { }
