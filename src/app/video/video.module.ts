import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { VideoComponent } from './video.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
    VideoComponent,
  ],

  exports: [
    VideoComponent,
  ],
})
export class VideoModule {
}
