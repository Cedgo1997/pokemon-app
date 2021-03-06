import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

//Modules
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

// Components
import { DetailsComponent } from "./views/details/details.component";
import { HomeComponent } from "./views/home/home.component";
import { CardComponent } from "./components/card/card.component";
import { DexComponent } from "./components/dex/dex.component";
import { BadgeComponent } from "./components/badge/badge.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    HomeComponent,
    CardComponent,
    DexComponent,
    BadgeComponent,
    FooterComponent,
    FilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
