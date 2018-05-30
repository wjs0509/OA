import { EditProComponent } from './component/edit-pro/edit-pro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';
// layout
import { LayoutDefaultComponent } from '../layout/default/default.component';
import { LayoutFullScreenComponent } from '../layout/fullscreen/fullscreen.component';
import { LayoutPassportComponent } from '../layout/passport/passport.component';
// dashboard pages
import { DashboardComponent } from './dashboard/dashboard.component';
// passport pages
import { UserLoginComponent } from './passport/login/login.component';
import { UserRegisterComponent } from './passport/register/register.component';
import { UserRegisterResultComponent } from './passport/register-result/register-result.component';
// single pages
import { UserLockComponent } from './passport/lock/lock.component';
import { Exception403Component } from './exception/403.component';
import { Exception404Component } from './exception/404.component';
import { Exception500Component } from './exception/500.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutDefaultComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: DashboardComponent, data: { title: '首页' } },
            // 项目编辑
            { path: 'edit/:id', component: EditProComponent, data: { title: '编辑' } },
            // 履约、预付款项目
            { path: 'pap', loadChildren: './pap/pap.module#PapModule' },
            // 保理项目
            { path: 'factoring', loadChildren: './factoring/factoring.module#FactoringModule' },
            //待办事项
            {path: 'todolist', loadChildren:'./todolist/todolist.module#TodolistModule'}
        ]
    },
    // 全屏布局
    // {
    //     path: 'fullscreen',
    //     component: LayoutFullScreenComponent,
    //     children: [
    //     ]
    // },
    // passport
    {
        path: 'passport',
        component: LayoutPassportComponent,
        children: [
            { path: 'login', component: UserLoginComponent, data: { title: '登录', reuse: false } },
            { path: 'register', component: UserRegisterComponent },
            { path: 'register-result', component: UserRegisterResultComponent }
        ]
    },
    // 单页不包裹Layout
    { path: 'lock', component: UserLockComponent, data: { title: '锁屏', titleI18n: 'lock' } },
    { path: '403', component: Exception403Component },
    { path: '404', component: Exception404Component },
    { path: '500', component: Exception500Component },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: environment.useHash })],
    exports: [RouterModule]
})
export class RouteRoutingModule { }
