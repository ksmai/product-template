import { NgModule, Optional, SkipSelf } from '@angular/core';

import { DataService } from './data.service';

@NgModule({
  imports: [
  ],

  providers: [
    DataService,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    if (!!coreModule) {
      throw new Error('CoreModule should only be imported once');
    }
  }
}
