import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../pages/layout/layout.component.scss', './home.component.scss']
})
/*
0900134727.jpg
0901192171.jpg
0902294993-1.jpg
0902294993.jpg
0909362339.jpg
0909484292.jpg
0916054681.jpg
0916159046.jpg
0916760854-1.jpg
0916760854.jpg
0922539122.jpg
0966824558.jpg
0970163109.jpg
0976880830.jpg
0978613214.jpg
0981383197-1.jpg
0981383197-2.jpg
0981383197.jpg
0983683060-1.jpg
0983683060.jpg
0986192292.jpg
*/

export class HomeComponent implements OnInit {
  math = Math;
  carouselArr = [
    {
      image: 'https://picsum.photos/id/20/800/530',
      h3: '立即上線，佔盡先機',
      p: '現在加入\n網路的商機都是你的'
    },
    {
      image: 'https://picsum.photos/id/180/800/530',
      h3: '增加曝光，提升形象',
      p: 'Google 90以上評分\n適合手機/平板/電腦'
    },
  ];
  plans = [
    { product: '半年', month: 6, money: 3000, link: 'https://forms.gle/tXveGNKDYNteXwbT7' },
    { product: '一年', month: 12, money: 5500, link: 'https://forms.gle/tXveGNKDYNteXwbT7' },
    { product: '兩年', month: 24, money: 9000, link: 'https://forms.gle/tXveGNKDYNteXwbT7' },
    { product: '三年', month: 36, money: 12000, link: 'https://forms.gle/tXveGNKDYNteXwbT7' },
    { product: '四年', month: 48, money: 14000, link: 'https://forms.gle/tXveGNKDYNteXwbT7' },
    { product: '五年', month: 60, money: 15000, link: 'https://forms.gle/tXveGNKDYNteXwbT7' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
