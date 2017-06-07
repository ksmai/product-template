import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ActionComponent } from './action.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
    ActionComponent,
  ],

  exports: [
    ActionComponent,
  ],
})
export class ActionModule {
}
