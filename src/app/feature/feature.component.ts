import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { FeatureData } from '../../models';
import { DataService } from '../core/data.service';

@Component({
  selector: 'ads-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent implements OnInit {
  featureData: Observable<FeatureData>;
  demoImage: string;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.featureData = this.dataService.getFeatureData();
  }

  setDemoImage(src: string): void {
    this.demoImage = src;
  }
}
