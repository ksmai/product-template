import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { IntroData } from '../../models';
import { DataService } from '../core/data.service';

@Component({
  selector: 'ads-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  introData: Observable<IntroData>;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.introData = this.dataService.getIntroData();
  }
}
