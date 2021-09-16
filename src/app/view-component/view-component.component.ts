import {Component, Injectable, OnInit} from '@angular/core';
import {SelectionComponentComponent} from "../selection-component/selection-component.component";
import {CreateComponentComponent} from "../create-component/create-component.component";
import {BehaviorSubject, interval} from "rxjs";

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})

export class ViewComponentComponent implements OnInit {
  menSelection? : number;



  constructor(private select : SelectionComponentComponent) {

  }

  ngOnInit(): void {


    this.select.nums.subscribe(nex => {
      this.menSelection = nex
    });

  }

  newMenSelect(){
    return this.select;
  }

}
