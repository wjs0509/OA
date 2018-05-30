import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-travel-application',
  templateUrl: './travel-application.component.html',
})
export class TravelApplicationComponent implements OnInit {

    dataSet = [
        {
            id: 'GXQK20170317',
            depertement:'业务部',
            shijistarttime:'待综合部复核',
            shijiendtime:'待综合部复核',
            liucheng:'出差流程',
            shjd:'待【综合部备案】 审核',
            tjr:'聂志杰',
            tjtime:'2017-11-15'
        },
        {
            id: 'GXQK20170317',
            depertement:'业务部',
            shijistarttime:'待综合部复核',
            shijiendtime:'待综合部复核',
            liucheng:'出差流程',
            shjd:'待【综合部备案】 审核',
            tjr:'聂志杰',
            tjtime:'2017-11-15'
        }
    ];
    
    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
