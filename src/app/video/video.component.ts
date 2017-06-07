import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { VideoData } from '../../models';
import { DataService } from '../core/data.service';

@Component({
  selector: 'ads-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  videoData: Observable<VideoData>;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.videoData = this.dataService.getVideoData();
  }
}
