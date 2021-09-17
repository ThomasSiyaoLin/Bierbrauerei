import {Component, Injectable, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Component({
  selector: 'app-selection-component',
  templateUrl: './selection-component.component.html',
  styleUrls: ['./selection-component.component.css']
})
@Injectable()
export class SelectionComponentComponent implements OnInit {

    @Output()menNumer : number = 0;
    @Output() onClick = new EventEmitter();
    //if 0 then main selection; 1 is create Component; 2 is reedeem coupon; 3 is check coupon

  constructor() {

  }



  couponCreateClicked(){
    this.onClick.emit(1);
    this.menNumer = 1;
    console.log(this.menNumer);


  }
  couponCheckedClicked(){
    this.onClick.emit(2);
    this.menNumer = 2;
    console.log(this.menNumer);
  }

  couponReedeemClicked(){
    this.onClick.emit(3);
    this.menNumer = 3;

  }

  ngOnInit(): void {

  }

}
