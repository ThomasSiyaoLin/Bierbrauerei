import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { SelectionComponentComponent } from './selection-component/selection-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponentComponent } from './create-component/create-component.component';
import { ResetComponent } from './reset/reset.component';
import { ReedeemComponent } from './reedeem/reedeem.component';
import { MarketingDetailsComponent } from './marketing-details/marketing-details.component';
import {HttpClientModule} from "@angular/common/http";
import { CheckComponent } from './check/check.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MarketingComponent } from './marketing/marketing.component';
import { BrandComponent } from './brand/brand.component';
import { CreateMarketingComponent } from './create-marketing/create-marketing.component';
import { CreateBrandComponent } from './create-brand/create-brand.component';
import {AppRoutingModule, routingComponents} from "./app-routing.module";
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectionComponentComponent,
    CreateComponentComponent,
    ResetComponent,
    ReedeemComponent,
    MarketingDetailsComponent,
    CheckComponent,
    MarketingComponent,
    BrandComponent,
    CreateMarketingComponent,
    CreateBrandComponent,
    routingComponents,
    NavBarComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [SelectionComponentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

