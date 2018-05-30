import { HttpClient } from '@angular/common/http';
import { SettingsService } from '@delon/theme';
import { Component, OnDestroy, Inject, Optional, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { SocialService, SocialOpenType, TokenService, DA_SERVICE_TOKEN } from '@delon/auth';
import { ReuseTabService } from '@delon/abc';
import { environment } from '@env/environment';
import { StartupService } from '@core/startup/startup.service';

@Component({
    selector: 'app-passport-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less'],
    providers: [SocialService]
})
export class UserLoginComponent implements OnInit {

    form: FormGroup;
    error = '';
    loading = false;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        public msg: NzMessageService,
        private modalSrv: NzModalService,
        // private settingsService: SettingsService,
        // private socialService: SocialService,
        @Optional() @Inject(ReuseTabService) private reuseTabService: ReuseTabService,
        @Inject(DA_SERVICE_TOKEN) private tokenService: TokenService,
        private startupSrv: StartupService,
        private http: HttpClient
    ) {

    }

    ngOnInit() {
        this.form = this.fb.group({
            userName: [null, [Validators.required]],
            password: [null, Validators.required],
            remember: [false]
        });
        this.modalSrv.closeAll();
    }

    // region: fields

    get userName() { return this.form.controls.userName; }
    get password() { return this.form.controls.password; }

    // endregion


    submit() {
        this.error = '';
        this.userName.markAsDirty();
        this.userName.updateValueAndValidity();
        this.password.markAsDirty();
        this.password.updateValueAndValidity();
        // tslint:disable-next-line:curly
        if (this.userName.invalid || this.password.invalid) return;
        // mock http
        this.loading = true;
        // tslint:disable-next-line:max-line-length
        this.http.post('Token', 'grant_type=password&username=' + this.userName.value + '&password=' + this.password.value).subscribe(res => {
            console.log(res);
            this.loading = false;
            // 清空路由复用信息
            this.reuseTabService.clear();
            // 设置Token信息
            this.tokenService.set({
                token: res['access_token'],
                name: this.userName.value,
            });
            this.router.navigate(['/']);
        }, err => {
            console.log(err);
            this.loading = false;
            if (err.status === 400) {
                this.error = err.error.error_description;
                console.log(this.error);
                return;
            }
        });

        // setTimeout(() => {
        //     this.loading = false;
        //     if (this.type === 0) {
        //         if (this.userName.value !== 'admin' || this.password.value !== '888888') {
        //             this.error = `账户或密码错误`;
        //             return;
        //         }
        //     }

        //     // 清空路由复用信息
        //     this.reuseTabService.clear();
        //     // 设置Token信息
        //     this.tokenService.set({
        //         token: '123456789',
        //         name: this.userName.value,
        //         email: `cipchk@qq.com`,
        //         id: 10000,
        //         time: +new Date
        //     });
        //     // 重新获取 StartupService 内容，若其包括 User 有关的信息的话
        //     // this.startupSrv.load().then(() => this.router.navigate(['/']));
        //     // 否则直接跳转
        //     this.router.navigate(['/']);
        // }, 1000);
    }
}
