import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BrandServiceComponent} from "../Service/brand-service/brand-service.component";

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  providers: [BrandServiceComponent],
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  menuSelection : number = 0;
  @Output() onClickBrand = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }




}
