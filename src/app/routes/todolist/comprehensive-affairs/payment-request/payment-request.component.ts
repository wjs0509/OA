import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-payment-request',
  templateUrl: './payment-request.component.html',
})
export class PaymentRequestComponent implements OnInit {

    dataSet = [
        {
            id: 'GXQK20170317',
            type:'其他',
            yusuan: '1,455.00',
            shijimoney:'0.00',
            fashengriqi:'2017-08-08',
            suoshuwangdian:'深圳总部',
            shijisyr:'聂志杰',
            jbr:'聂志杰',
            liucheng:'Jakarta',
            shjd:'待【副总经理】审核',
            tjr:'聂志杰',
            tjtime:'2017-11-15'
        },
        {
            id: 'GXQK20170317',
            type:'其他',
            yusuan: '1,455.00',
            shijimoney:'0.00',
            fashengriqi:'2017-08-08',
            suoshuwangdian:'深圳总部',
            shijisyr:'聂志杰',
            jbr:'聂志杰',
            liucheng:'Jakarta',
            shjd:'待【副总经理】审核',
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
