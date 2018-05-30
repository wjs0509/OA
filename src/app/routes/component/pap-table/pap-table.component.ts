import { Component, OnInit, Input } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-pap-table',
  templateUrl: './pap-table.component.html',
})
export class PapTableComponent implements OnInit {

    @Input()
    dataSet = [];

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
