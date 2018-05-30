import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-all-list',
  templateUrl: './all-list.component.html',
})
export class AllListComponent implements OnInit {

    dataSet = [
        {
            id: 'GXPAP20181237',
            date:'未齐',
            bank: '深圳建行',
            company: '大连金湾建设集团有限公司',
            proName:'大连庄河风电电气设备产业基地建设项目',
            syr:'中国船舶重工集团国际工程有限公司',
            limit:'6个月',
            type:'履约',
            money:'36.65万',
            geshi:'一般保证',
            liucheng:'一般保证',
            level:'待【出函负责人】审核',
            toBank:'张娇燕',
        },
        {
            id: 'GXPAP20181237',
            date:'未齐',
            bank: '深圳建行',
            company: '大连金湾建设集团有限公司',
            proName:'大连庄河风电电气设备产业基地建设项目',
            syr:'中国船舶重工集团国际工程有限公司',
            limit:'6个月',
            type:'履约',
            money:'36.65万',
            geshi:'一般保证',
            liucheng:'一般保证',
            level:'待【出函负责人】审核',
            toBank:'张娇燕',
        },
        {
            id: 'GXPAP20181237',
            date:'未齐',
            bank: '深圳建行',
            company: '大连金湾建设集团有限公司',
            proName:'大连庄河风电电气设备产业基地建设项目',
            syr:'中国船舶重工集团国际工程有限公司',
            limit:'6个月',
            type:'履约',
            money:'36.65万',
            geshi:'一般保证',
            liucheng:'一般保证',
            level:'待【出函负责人】审核',
            toBank:'张娇燕',
        }
    ];

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
