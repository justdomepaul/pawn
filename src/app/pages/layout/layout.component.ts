import { Component, OnInit } from '@angular/core';
import { StoreInfo } from 'src/app/interface/store';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  storeInfo: StoreInfo = {
    name: '台南中西區 日日會',
    address: '710台南市永康區中山路101巷2之1號5號',
    tel: '0986 192 292',
    imageUrlArray: ['assets/prod/banner01.jpg', 'assets/prod/banner02.jpg'],
    plan: [
      {
        moneyTotal: '3萬',
        moneyTake: '30000',
        returnDays: '60',
        moneyReturn: '550',
      },
      {
        moneyTotal: '6萬',
        moneyTake: '60000',
        returnDays: '60',
        moneyReturn: '1100',
      },
      {
        moneyTotal: '9萬',
        moneyTake: '90000',
        returnDays: '60',
        moneyReturn: '1650',
      },
    ],
  };

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.matIconRegistry.addSvgIcon(
      'phone',
      this.domSanitizer.bypassSecurityTrustResourceUrl('https://image.flaticon.com/icons/svg/60/60720.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'directions',
      this.domSanitizer.bypassSecurityTrustResourceUrl('https://image.flaticon.com/icons/svg/61/61021.svg')
    );
  }

  ngOnInit() {
    this.route.params.subscribe(
      (v) => {
        console.log(v);
        this.http.get('assets/pawn/' + v.phone + '.json').subscribe(
          (storeInfo: StoreInfo) => {
            this.storeInfo = storeInfo;
          },
          (e) => { console.log(e); },
        );
      },
      (e) => { console.log(e); },
    );
  }
}
