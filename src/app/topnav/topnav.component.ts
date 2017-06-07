import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TopnavData } from '../../models';
import { DataService } from '../core/data.service';

@Component({
  selector: 'ads-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
})
export class TopnavComponent implements OnInit {
  topnavData: Observable<TopnavData>;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.topnavData = this.dataService.getTopnavData();
  }
}
