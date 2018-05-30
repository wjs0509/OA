import { Component, OnInit, Input } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-oa-modification-list',
  templateUrl: './oa-modification-list.component.html',
})
export class OaModificationListComponent implements OnInit {
    @Input()
    dataSet = [];
    
    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
