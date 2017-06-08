import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DetailData } from '../../models';
import { DataService } from '../core/data.service';

@Component({
  selector: 'pro-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  detailData: Observable<DetailData>;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.detailData = this.dataService.getDetailData();
  }
}
