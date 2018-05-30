import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { ANY_STATE } from '../../../../../node_modules1/@angular/animations/browser/src/dsl/animation_transition_expr';

@Component({
    selector: 'app-edit-pro',
    templateUrl: './edit-pro.component.html',
    styleUrls: ['./edit-pro.component.less']
})
export class EditProComponent implements OnInit {

    queryList: any = {};

    options = [{
        value: '浙江',
        label: '浙江',
        children: [{
            value: '杭州',
            label: '杭州',
            children: [{
                value: '西湖',
                label: '西湖',
                isLeaf: true
            }]
        }, {
            value: '宁波',
            label: '宁波',
            isLeaf: true
        }]
    }, {
        value: '江苏',
        label: '江苏',
        children: [{
            value: '南京',
            label: '南京',
            children: [{
                value: '中华门',
                label: '中华门',
                isLeaf: true
            }]
        }]
    }];

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {}

    // 开始时间和结束时间的预设值
    disabledStartDate = (startValue: Date): boolean => {
        if (!startValue || !this.queryList.gtMaturity) {
            return false;
        }
        return startValue.getTime() > this.queryList.gtMaturity.getTime();
    }

    disabledEndDate = (endValue: Date): boolean => {
        if (!endValue || !this.queryList.gtDate) {
            return false;
        }
        return endValue.getTime() <= this.queryList.gtDate.getTime();
    }

    onSubmit({f,value, valid}, event: Event){
        console.log(event)
        console.log(value)
        console.log(valid)
    }

}
