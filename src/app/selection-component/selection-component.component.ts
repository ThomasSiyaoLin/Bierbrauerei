import {Component, Injectable, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Component({
  selector: 'app-selection-component',
  templateUrl: './selection-component.component.html',
  styleUrls: ['./selection-component.component.css']
})
@Injectable()
export class SelectionComponentComponent implements OnInit {

    menNumer : number = 0;
    @Output() onClickSelection = new EventEmitter<boolean>();
    @Input()reset : boolean = true;
    //if 0 then main selection; 1 is create Component; 2 is reedeem coupon; 3 is check coupon

  constructor() {

  }



  couponCreateClicked(){
    this.onClickSelection.emit(this.reset);
    this.menNumer = 1;
    console.log(this.menNumer);


  }
  couponCheckedClicked(){
    this.onClickSelection.emit(this.reset);
    this.menNumer = 3;
    console.log(this.menNumer);
  }

  couponReedeemClicked(){
    this.onClickSelection.emit(this.reset);
    this.menNumer = 2;

  }



  ngOnInit(): void {

  }

}
