import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ActionData } from '../../models';
import { DataService } from '../core/data.service';

@Component({
  selector: 'ads-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})
export class ActionComponent implements OnInit {
  actionData: Observable<ActionData>;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.actionData = this.dataService.getActionData();
  }
}
