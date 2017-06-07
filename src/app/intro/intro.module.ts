import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { IntroComponent } from './intro.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
    IntroComponent,
  ],

  exports: [
    IntroComponent,
  ],
})
export class IntroModule {
}
