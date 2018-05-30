import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-matter-instruction',
  templateUrl: './matter-instruction.component.html',
})
export class MatterInstructionComponent implements OnInit {

    dataSet = [
        {
            id: 'GXQK20170317',
            type:'业务部',
            reason:'待综合部复核',
            liucheng:'出差流程',
            shjd:'待【综合部备案】 审核',
            tjr:'聂志杰',
            tjtime:'2017-11-15'
        },
        {
            id: 'GXQK20170317',
            type:'业务部',
            reason:'待综合部复核',
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
