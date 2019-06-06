export interface StoreInfo {
  name: string;
  tel: string;
  address: string;
  imageUrlArray: string[];
  plan: Plan[];
}

export interface Plan {
  moneyTotal: string;
  moneyTake: string;
  moneyReturn: string;
  returnDays: string;
}
