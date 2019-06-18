import { Component, OnInit } from '@angular/core';
import { StoreInfo } from '../interface/store';
import { PawnService } from '../service/pawn.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../pages/layout/layout.component.scss', './home.component.scss']
})

export class HomeComponent implements OnInit {
  math = Math;
  pawnList = [
    '0900134727',
    '0901192171',
    '0909362339',
    '0909484292',
    '0916054681',
    '0916159046',
    '0916760854',
    '0922539122',
    '0966824558',
    '0970163109',
    '0976880830',
    '0902294993',
    '0981301409',
    '0979552109',
    '0978613214',
  ];
  pawns: StoreInfo[] = [];

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
  constructor(
    private pawnService: PawnService,
  ) { }

  ngOnInit() {
    this.pawnGet();
  }

  pawnGet() {
    this.pawnList.map(phone => {
      this.pawnService.pawnGetJson(phone).subscribe(
        (v: StoreInfo) => {
          this.pawns.push(v);
        },
        (e) => { console.log(e); },
      );
    });
  }

}
