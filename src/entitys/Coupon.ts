
export class Coupon{

  couponID : string;
  campaignID : string;
  used : boolean;
  userID : string;

  constructor(couponID :string, campaignID : string, isUsed : boolean, userID : string) {
    this.couponID = couponID;
    this.campaignID = campaignID;
    this.used = isUsed;
    this.userID = userID;
  }



}
