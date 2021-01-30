import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetailsComponent } from "./views/details/details.component";
import { HomeComponent } from "./views/home/home.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "details/:id", component: DetailsComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
