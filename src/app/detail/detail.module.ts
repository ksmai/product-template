import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DetailComponent } from './detail.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
    DetailComponent,
  ],

  exports: [
    DetailComponent,
  ],
})
export class DetailModule {
}
