import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ScrollImageDirective } from './scroll-image.directive';

@NgModule({
  imports: [
    CommonModule,
  ],

  declarations: [
    ScrollImageDirective,
  ],

  exports: [
    CommonModule,
    ScrollImageDirective,
  ],
})
export class SharedModule {
}
