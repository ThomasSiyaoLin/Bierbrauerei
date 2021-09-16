import {Component, Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Component({
  selector: 'app-selection-component',
  templateUrl: './selection-component.component.html',
  styleUrls: ['./selection-component.component.css']
})
@Injectable()
export class SelectionComponentComponent implements OnInit {
  data = new BehaviorSubject(0);
  nums = this.data.asObservable();
    //if 0 then main selection; 1 is create Component; 2 is reedeem coupon; 3 is check coupon

  constructor() {

  }



  couponCreateClicked(){
    this.data.next(1);


  }
  couponCheckedClicked(){
    this.data.next(2);

  }

  couponReedeemClicked(){
    this.data.next(3);

  }

  ngOnInit(): void {

  }

}
