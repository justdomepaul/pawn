import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  imgarrs = new Array(12);
  page = 0;
  pageEvent: PageEvent = {
    pageIndex: 0,
    length: 240,
    pageSize: 12,
  };
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (v) => {
        console.log(v);
        if (v.page !== undefined) {
          this.page = Number(v.page) - 1;
        }
      },
      (e) => { console.log(e); },
    );
  }

}
