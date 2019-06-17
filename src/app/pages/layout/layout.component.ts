import { Component, OnInit } from '@angular/core';
import { StoreInfo } from 'src/app/interface/store';
import { ActivatedRoute } from '@angular/router';
import { PawnService } from 'src/app/service/pawn.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  sloganTagColor = ['primary', '', 'accent', 'warn'];
  storeInfo: StoreInfo = {
    storeName: '台南中西區 日日會',
    address: '710台南市永康區中山路101巷2之1號5號',
    tel: '0986 192 292',
    imageUrlArray: ['assets/prod/banner01.jpg', 'assets/prod/banner02.jpg'],
    userName: '馬經理',
    slogan: '週轉不求人，還款無壓力',
    lineId: '5987dogking',
    floorText: '無論遲繳,負債過高,協商強停,法扣..等\n條件不佳可詳談協助伸辦\n勞工/領現/八大 各行各業工作滿一個月皆可辦理',
    sloganTag: [
      [
        { color: 'primary', text: '攤販' },
        { color: '', text: '市場' },
        { color: 'accent', text: '店家' },
        { color: 'warn', text: '商家' },
      ],
    ],
    parallax: {
      text: '急用錢？找我們',
      backgroudImage: 'assets/prod/parallax01.jpg',
    },
    plan: [
      {
        moneyTotal: '金額',
        moneyTake: '實拿',
        returnDays: '天數',
        moneyReturn: '日繳',
      },
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
    card: {
      title: '三大保證',
      list: ['條件操寬鬆', '免押免保', '不看信用'],
    },
  };

  constructor(
    private route: ActivatedRoute,
    private pawnService: PawnService,
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(
      (v) => {
        console.log(v);
        this.pawnService.pawnGetJson(v.phone).subscribe(
          (storeInfo: StoreInfo) => {
            this.storeInfo = storeInfo;
            console.log(storeInfo);
            this.pawnInit();
          },
          (e) => { console.log(e); },
        );
      },
      (e) => { console.log(e); },
    );
  }

  pawnInit() {
    window.document.title = this.storeInfo.storeName;
  }
}
