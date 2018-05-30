import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
    selector: 'app-query-pap-pro',
    templateUrl: './query-pap-pro.component.html',
    styleUrls: ['./query-pap-pro.component.less']
})
export class QueryPapProComponent implements OnInit {

    queryList = {
        codeid: '',
        companyName: '',
        projName: '',
        gtBeneficiaryName: '',
        bus_expand_person_Userid: '',
        busRegion: '',
        bank: '',
        preAuditorUserid: '',
        submitUserid: '',
    }

    constructor(
        private http: _HttpClient,
    ) { }

    ngOnInit() {
    }

}
