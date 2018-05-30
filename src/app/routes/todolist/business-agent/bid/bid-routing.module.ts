import { ToOaModifyComponent } from './to-oa-modify/to-oa-modify.component';
import { ToAuditComponent } from './to-audit/to-audit.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path:'',children:[
        {path:'toAudit',component:ToAuditComponent,data:{title:'投标待审核'}},
        {path:'toOaModify',component:ToOaModifyComponent,data:{title:'投标待OA修改'}},
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BidRoutingModule {}
