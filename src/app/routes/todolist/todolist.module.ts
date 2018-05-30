import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { WaitAuditComponent } from './risk/positive-negative/wait-audit/wait-audit.component';
import {TodolistRoutingModule} from './todolist-routing.module';

const COMPONENT_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    TodolistRoutingModule
  ],
  declarations: [
      ...COMPONENT_NOROUNT,
      WaitAuditComponent,
  ],
  entryComponents: COMPONENT_NOROUNT
})
export class TodolistModule { }
