import { request } from './request'


export function getDetail(iid) {


  return request({
    url: "/detail",
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export class Goods {

  constructor(itemInfo, columns, services) {
    this.desc = itemInfo.desc;
    this.price = itemInfo.price;
    this.title = itemInfo.title
    this.desc = itemInfo.desc;

    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;


  }

}


export class shop {

  constructor(shopInfo, score) {
    this.shopInfo = shopInfo;
    this.score = score;
  }


}








