import { SearchResultsComponent } from "./core/search-results.component";
import { SearchCriteriaComponent } from "./core/search-criteria.component";
import { SearchComponent } from "./core/search.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AgGridModule } from "ag-grid-angular";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchCriteriaComponent,
    SearchResultsComponent
  ],
  imports: [BrowserModule, AgGridModule.withComponents([])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
