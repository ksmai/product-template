import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import {
  videoData,
  introData,
  detailData,
  galleryData,
  featureData,
  actionData,
  topnavData,
  sidenavData,
} from '../../data';

import {
  VideoData,
  IntroData,
  DetailData,
  GalleryData,
  FeatureData,
  ActionData,
  TopnavData,
  SidenavData,
} from '../../models';

@Injectable()
export class DataService {
  getVideoData(): Observable<VideoData> {
    return Observable.of(videoData);
  }

  getIntroData(): Observable<IntroData> {
    return Observable.of(introData);
  }

  getDetailData(): Observable<DetailData> {
    return Observable.of(detailData);
  }

  getGalleryData(): Observable<GalleryData> {
    return Observable.of(galleryData);
  }

  getFeatureData(): Observable<FeatureData> {
    return Observable.of(featureData);
  }

  getActionData(): Observable<ActionData> {
    return Observable.of(actionData);
  }

  getTopnavData(): Observable<TopnavData> {
    return Observable.of(topnavData);
  }

  getSidenavData(): Observable<SidenavData> {
    return Observable.of(sidenavData);
  }
}
