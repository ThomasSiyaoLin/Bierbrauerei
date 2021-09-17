import {Component, Injectable, Input, OnInit} from '@angular/core';
import {SelectionComponentComponent} from "../selection-component/selection-component.component";
import {CreateComponentComponent} from "../create-component/create-component.component";
import {BehaviorSubject, interval} from "rxjs";

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  providers: [SelectionComponentComponent],
  styleUrls: ['./view-component.component.css']
})

export class ViewComponentComponent implements OnInit {
  menSelection : number = 0;




  constructor(private select : SelectionComponentComponent) {
    this.menSelection = 0;
  }

  ngOnInit(): void {

    this.menSelection = 0;


  }

  newMenSelect(){
    return this.select;
  }

  getNum() {

  }

}
