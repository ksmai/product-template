import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import '../styles/styles.scss';
import { ActionModule } from './action/action.module';
import { AppComponent } from './app.component';
import { DetailModule } from './detail/detail.module';
import { FeatureModule } from './feature/feature.module';
import { GalleryModule } from './gallery/gallery.module';
import { IntroModule } from './intro/intro.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { TopnavModule } from './topnav/topnav.module';
import { VideoModule } from './video/video.module';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    TopnavModule,
    SidenavModule,
    VideoModule,
    IntroModule,
    DetailModule,
    GalleryModule,
    FeatureModule,
    ActionModule,
  ],

  declarations: [
    AppComponent,
  ],

  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
