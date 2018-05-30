import { Component, OnInit, Input } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-special-list',
  templateUrl: './special-list.component.html',
})
export class SpecialListComponent implements OnInit {

    @Input()
    dataSet = [];

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
