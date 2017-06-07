import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { DataService } from '../core/data.service';
import { SidenavData } from '../../models';

@Component({
  selector: 'ads-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  sidenavData: Observable<SidenavData>;
  opened: boolean;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.sidenavData = this.dataService.getSidenavData();
    this.opened = false;
  }

  toggleOpen(): void {
    this.opened = !this.opened;
  }
}
