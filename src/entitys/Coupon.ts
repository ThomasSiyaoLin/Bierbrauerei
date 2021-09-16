
export class Coupon{

  couponID : string;
  campaignID : string;
  isUsed : boolean;
  userID : string;

  constructor(couponID :string, campaignID : string, isUsed : boolean, userID : string) {
    this.couponID = couponID;
    this.campaignID = campaignID;
    this.isUsed = isUsed;
    this.userID = userID;
  }



}
