import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-to-approval',
  templateUrl: './to-approval.component.html',
})
export class ToApprovalComponent implements OnInit {

    dataSet = [
        {
            id: 'GXPAP20181236',
            company: '大连金湾建设集团有限公司',
            proName:'大连庄河风电电气设备产业基地建设项目',
            oaReviseType:'风险特批',
            oaReviseNum:'1',
            oaReviseStage:'待【经营班子核查】审核',
            fengkong:'已通过',
            tjr:'徐春梓',
            oaTime:'2018-05-09 12:21:37',
        },
        {
            id: 'GXPAP20181237',
            company: '大连金湾建设集团有限公司',
            proName:'大连庄河风电电气设备产业基地建设项目',
            oaReviseType:'OA修改特批',
            oaReviseNum:'1',
            oaReviseStage:'12个月',
            fengkong:'已通过',
            tjr:'徐春梓',
            oaTime:'2018-05-09 12:21:37',
        },
        {
            id: 'GXPAP20181238',
            company: '大连金湾建设集团有限公司',
            proName:'大连庄河风电电气设备产业基地建设项目',
            oaReviseType:'OA修改特批',
            oaReviseNum:'1',
            oaReviseStage:'12个月',
            fengkong:'已通过',
            tjr:'徐春梓',
            oaTime:'2018-05-09 12:21:37',
        }
    ];

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
