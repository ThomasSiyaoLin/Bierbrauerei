import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { SelectionComponentComponent } from './selection-component/selection-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponentComponent } from './create-component/create-component.component';
import { ViewComponentComponent } from './view-component/view-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectionComponentComponent,
    CreateComponentComponent,
    ViewComponentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [SelectionComponentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
