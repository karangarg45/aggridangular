import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-search-results",
  template: `<div>
  <ag-grid-angular 
    style="width: 700px; height: 500px;" 
    class="ag-theme-balham"
    [rowData]="rowData" 
    [columnDefs]="columnDefs"
    [enableSorting]="true"
    >
</ag-grid-angular>
  </div>`
})
export class SearchResultsComponent implements OnInit {
  title = "app";

  columnDefs = [
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" }
  ];

  rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ];
  constructor() {}

  ngOnInit() {}
}
