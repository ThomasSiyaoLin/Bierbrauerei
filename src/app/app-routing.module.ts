import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomepageComponent} from "./homepage/homepage.component";
import {ViewComponentComponent} from "./view-component/view-component.component";
import {CreateComponentComponent} from "./create-component/create-component.component";
import {SelectionComponentComponent} from "./selection-component/selection-component.component";
import {MarketingComponent} from "./marketing/marketing.component";
import {BrandComponent} from "./brand/brand.component";

const routes: Routes = [
  {path: 'Homepage', component: HomepageComponent},
  {path: 'View', component: ViewComponentComponent},
  {path: 'UserView', component: SelectionComponentComponent},
  {path: 'CreateCampaign', component: MarketingComponent},
  {path: 'CreateBrand', component: BrandComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
export const routingComponents =
  [HomepageComponent, ViewComponentComponent, SelectionComponentComponent, MarketingComponent, BrandComponent]
