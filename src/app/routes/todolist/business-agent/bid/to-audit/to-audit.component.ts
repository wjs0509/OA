import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
    selector: 'app-to-audit',
    templateUrl: './to-audit.component.html',
})
export class ToAuditComponent implements OnInit {

    dataSet = [];

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
