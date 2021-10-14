import {Component, EventEmitter, Inject, Injectable, OnInit, Output} from '@angular/core';
import {SelectionComponentComponent} from "../selection-component/selection-component.component";
import {ViewComponentComponent} from "../view-component/view-component.component";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  providers: [SelectionComponentComponent],
  styleUrls: ['./homepage.component.css']
})
@Injectable()
export class HomepageComponent implements OnInit {

  userProfile? : string= '';
  @Output() onClickAdmin = new EventEmitter<boolean>();


  constructor(private selectionComponent : SelectionComponentComponent) {

  }

  ngOnInit(): void {
  }

  setUserToAdmin() {
    this.userProfile = 'Admin'
    this.selectionComponent.setAdmin(true);
  }
}
