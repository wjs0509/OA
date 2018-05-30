import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-to-oa-modify',
  templateUrl: './to-oa-modify.component.html',
})
export class ToOaModifyComponent implements OnInit {

    dataSet = [];

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
