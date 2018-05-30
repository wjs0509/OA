import { ToApprovalComponent } from './to-approval/to-approval.component';
import { ToBeAuditedComponent } from './to-be-audited/to-be-audited.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ToOaModifyComponent } from './to-oa-modify/to-oa-modify.component';

const routes: Routes = [
    {path:'',children:[
        {path:'toAudite',component:ToBeAuditedComponent,data:{title:'履约、预付款待审核'}},
        {path:'toApproval',component:ToApprovalComponent,data:{title:'履约、预付款待特批'}},
        {path:'toOaModify',component:ToOaModifyComponent,data:{title:'履约、预付款待OA修改'}},
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BusinessPapRoutingModule {}
