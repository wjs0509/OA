import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path:'',children:[
        {path:'pap',loadChildren:'./pap/business-pap.module#BusinessPapModule'},
        {path:'bid',loadChildren:'./bid/bid.module#BidModule'},
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BusinessAgentRoutingModule {}
