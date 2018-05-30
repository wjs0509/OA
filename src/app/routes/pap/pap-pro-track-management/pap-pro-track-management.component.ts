import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-pap-pro-track-management',
  templateUrl: './pap-pro-track-management.component.html',
})
export class PapProTrackManagementComponent implements OnInit {

    dataSet = [
        {
            id: 'GXPAP20181237',
            pingtai: '大连金湾建设集团有限公司',
            company: '大连金湾建设集团有限公司',
            proName:'大连庄河风电电气设备产业基地建设项目',
            syr:'华润电力唐山丰润有限公司',
            money:'1430350元',
            limit:'12个月',
            pingfen:'9.80',
            remark:'①失信人 ②被列入黑名单 ③拖欠工资 ④涉及民间借贷',
        },
        {
            id: 'GXPAP20181237',
            pingtai: '大连金湾建设集团有限公司',
            company: '大连金湾建设集团有限公司',
            proName:'大连庄河风电电气设备产业基地建设项目',
            syr:'华润电力唐山丰润有限公司',
            money:'1430350元',
            limit:'12个月',
            pingfen:'9.80',
            remark:'①失信人 ②被列入黑名单 ③拖欠工资 ④涉及民间借贷',
        },
        {
            id: 'GXPAP20181237',
            pingtai: '大连金湾建设集团有限公司',
            company: '大连金湾建设集团有限公司',
            proName:'大连庄河风电电气设备产业基地建设项目',
            syr:'华润电力唐山丰润有限公司',
            money:'1430350元',
            limit:'12个月',
            pingfen:'9.80',
            remark:'①失信人 ②被列入黑名单 ③拖欠工资 ④涉及民间借贷',
        }
    ];

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
