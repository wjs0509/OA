import { ActivatedRoute } from '@angular/router';
import { ReuseTabService } from '@delon/abc';
import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-audit-report',
  templateUrl: './audit-report.component.html',
  styleUrls:['./audit-report.component.less']
})
export class AuditReportComponent implements OnInit {

    id:any;

    constructor(
        private http: _HttpClient,
        private route: ActivatedRoute,
        private reuseTabService: ReuseTabService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params.id;
            this.reuseTabService.title = `审核报告 ${this.id}`;
        });
    }

}
