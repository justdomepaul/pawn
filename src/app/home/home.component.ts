import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../pages/layout/layout.component.scss', './home.component.scss']
})
export class HomeComponent implements OnInit {
  math = Math;
  imageUrlArray = [
    'https://picsum.photos/id/20/800/530',
    'https://picsum.photos/id/180/800/530'
  ];
  plans = [
    { product: '半年', month: 6, money: 3000 },
    { product: '一年', month: 12, money: 5000 },
    { product: '兩年', month: 24, money: 9000 },
    { product: '三年', month: 36, money: 12000 },
    { product: '四年', month: 48, money: 14000 },
    { product: '五年', month: 60, money: 15000 },
  ];
  constructor() { }

  ngOnInit() {
  }

}
