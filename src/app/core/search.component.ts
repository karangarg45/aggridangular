import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-search",
  template: `
  <app-search-criteria></app-search-criteria>
  <app-search-results></app-search-results>`
})
export class SearchComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
