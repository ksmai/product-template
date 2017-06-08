import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GalleryData } from '../../models';
import { DataService } from '../core/data.service';

@Component({
  selector: 'pro-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  galleryData: Observable<GalleryData>;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.galleryData = this.dataService.getGalleryData();
  }
}
