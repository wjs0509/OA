import { FactoringRoutingModule } from './factoring-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AddFactoringComponent } from './add-factoring/add-factoring.component';
import { AllFactoringListComponent } from './all-factoring-list/all-factoring-list.component';
import { FinishedFactoringListComponent } from './finished-factoring-list/finished-factoring-list.component';
import { LetterFactoringListComponent } from './letter-factoring-list/letter-factoring-list.component';
import { TrackFactoringListComponent } from './track-factoring-list/track-factoring-list.component';
import { UnfinishedFactoringListComponent } from './unfinished-factoring-list/unfinished-factoring-list.component';
import { VetoFactoringListComponent } from './veto-factoring-list/veto-factoring-list.component';
import { OaReviseFactoringListComponent } from './oa-revise-factoring-list/oa-revise-factoring-list.component';
import { SpecialFactoringListComponent } from './special-factoring-list/special-factoring-list.component';


const COMPONENT_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    FactoringRoutingModule
  ],
  declarations: [
      ...COMPONENT_NOROUNT,
      AddFactoringComponent,
      AllFactoringListComponent,
      FinishedFactoringListComponent,
      LetterFactoringListComponent,
      TrackFactoringListComponent,
      UnfinishedFactoringListComponent,
      VetoFactoringListComponent,
      OaReviseFactoringListComponent,
      SpecialFactoringListComponent
  ],
  entryComponents: COMPONENT_NOROUNT
})
export class FactoringModule { }
