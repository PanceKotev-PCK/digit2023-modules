import { Route } from "@angular/router";
import { SupplyTableComponent } from "./components/supply-table/supply-table.component";

export const routes: Route[] = [
{
  path:'', component: SupplyTableComponent, pathMatch: 'full'
}
]
