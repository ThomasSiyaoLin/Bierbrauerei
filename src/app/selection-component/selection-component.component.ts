import {Component, Injectable, OnInit, Output, EventEmitter, Input} from '@angular/core';


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
    @Input()isAdmin : boolean = false;



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

  setAdmin(bool : boolean){
    this.isAdmin = bool;
  }





  ngOnInit(): void {

  }

}
