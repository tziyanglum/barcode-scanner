import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "calendar",
        children: [
          {
            path: "",
            loadChildren: "./calendar/calendar.module#CalendarPageModule"
          }
        ]
      },
      {
        path: "home",
        children: [
          {
            path: "",
            loadChildren: "./home/home.module#HomePageModule"
          }
        ]
      },
      {
        path: "products",
        children: [
          {
            path: "",
            loadChildren: "./products/products.module#ProductsPageModule"
          }
        ]
      },
      {
        path: "",
        redirectTo: "",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  { path: 'calendar-details', loadChildren: './calendar/calendar-details/calendar-details.module#CalendarDetailsPageModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
