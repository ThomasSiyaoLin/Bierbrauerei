import {Component, Injectable, Input, OnInit} from '@angular/core';
import {CreateComponentComponent} from "../create-component/create-component.component";
import {BehaviorSubject, interval} from "rxjs";

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})

export class ViewComponentComponent implements OnInit {
  menSelection : number = 0;
  switchComponent : boolean = false;




  constructor() {

  }

  ngOnInit(): void {



  }

  newMenSelect(){

  }


  switchToSelectionComponent() {
    this.menSelection = 1;
  }

  switchToSelectionMarketing() {
    this.menSelection = 2;
  }

  switchToSelectionBrand() {
    this.menSelection = 3;
  }

  resetView () {
    this.menSelection = 0;
  }

  setView(bool : boolean) :void {
    this.switchComponent = bool;
    if(bool == false)
      this.resetView();

  }

}
