export interface StoreInfo {
  storeName: string;
  tel: string;
  address: string;
  userName: string;
  card: Card;
  slogan: string;
  sloganTag: SloganTag[][];
  floorText: string;
  lineId: string;
  plan: Plan[];
  parallax: Parallax;
  imageUrlArray: string[];
}

export interface Plan {
  moneyTotal: string;
  moneyTake: string;
  moneyReturn: string;
  returnDays: string;
}

export interface Card {
  title: string;
  list: string[];
}

export interface Parallax {
  text: string;
  backgroudImage: string;
}

// export interface SloganTag {
//   tag: Tag[];
// }

export interface SloganTag {
  text: string;
  color: string;
}
