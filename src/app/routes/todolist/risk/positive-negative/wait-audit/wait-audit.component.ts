import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-wait-audit',
  templateUrl: './wait-audit.component.html',
})
export class WaitAuditComponent implements OnInit {
    dataSet = [
        {
            id: 'G20181237',
            type:'一般黑名单',
            key: '失信',
            liucheng:'待审',
            jieduan:'待审',
            tijiaoren:'lily',
            tijiaoriqi:'2018-5-17 11:40:07',
            laiyuan:'Jakarta',
            shifouqiyong:'是'
        },
        {
            id: 'G20181237',
            type:'一般黑名单',
            key: '失信',
            liucheng:'待审',
            jieduan:'待审',
            tijiaoren:'lily',
            tijiaoriqi:'2018-5-17 11:40:07',
            laiyuan:'Jakarta',
            shifouqiyong:'是'
        },
        {
            id: 'G20181237',
            type:'一般黑名单',
            key: '失信',
            liucheng:'待审',
            jieduan:'待审',
            tijiaoren:'lily',
            tijiaoriqi:'2018-5-17 11:40:07',
            laiyuan:'Jakarta',
            shifouqiyong:'是'
        },
        {
            id: 'G20181237',
            type:'一般黑名单',
            key: '失信',
            liucheng:'待审',
            jieduan:'待审',
            tijiaoren:'lily',
            tijiaoriqi:'2018-5-17 11:40:07',
            laiyuan:'Jakarta',
            shifouqiyong:'是'
        },
        {
            id: 'G20181237',
            type:'一般黑名单',
            key: '失信',
            liucheng:'待审',
            jieduan:'待审',
            tijiaoren:'lily',
            tijiaoriqi:'2018-5-17 11:40:07',
            laiyuan:'Jakarta',
            shifouqiyong:'是'
        }
    ];
    
    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
