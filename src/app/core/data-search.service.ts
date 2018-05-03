import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable()
export class DataSearchService {
  private endpoint: String = "";
  constructor(private httpClient: HttpClient) {}

  getData() {
    this.httpClient.get("");
  }
}
