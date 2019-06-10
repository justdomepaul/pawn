import { Component, OnInit } from '@angular/core';
import { StoreInfo } from 'src/app/interface/store';

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

  constructor() { }

  ngOnInit() {
  }

}
