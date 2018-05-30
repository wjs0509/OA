import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
})
export class LeaveApplicationComponent implements OnInit {

    dataSet = [
        {
            id: 'GXQK20170317',
            depertement:'业务部',
            type: '年假',
            shijistarttime:'待综合部复核',
            shijiendtime:'待综合部复核',
            leavealltime:'待综合部复核',
            liucheng:'请假流程',
            shjd:'待【综合部备案】 审核',
            tjr:'聂志杰',
            tjtime:'2017-11-15'
        },
        {
            id: 'GXQK20170317',
            depertement:'业务部',
            type: '年假',
            shijistarttime:'待综合部复核',
            shijiendtime:'待综合部复核',
            leavealltime:'待综合部复核',
            liucheng:'请假流程',
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
