import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

    dataSet = [
        {
            id: 'GXPAP20181237',
            bank: '深圳建行',
            company: '大连金湾建设集团有限公司',
            proName:'大连庄河风电电气设备产业基地建设项目',
            type:'履约',
            money:'36.65万',
            level:'待【出函负责人】审核',
            toBank:'张娇燕',
            toBankTime:'2018-05-11 17:52:52'
        },
        {
            id: 'GXPAP20181237',
            bank: '深圳建行',
            company: '大连金湾建设集团有限公司',
            proName:'大连庄河风电电气设备产业基地建设项目',
            type:'履约',
            money:'36.65万',
            level:'待【出函负责人】审核',
            toBank:'张娇燕',
            toBankTime:'2018-05-11 17:52:52'
        },
        {
            id: 'GXPAP20181237',
            bank: '深圳建行',
            company: '大连金湾建设集团有限公司',
            proName:'大连庄河风电电气设备产业基地建设项目',
            type:'履约',
            money:'36.65万',
            level:'待【出函负责人】审核',
            toBank:'张娇燕',
            toBankTime:'2018-05-11 17:52:52'
        }
    ];

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
