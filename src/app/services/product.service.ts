import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  url: string = "https://world.openfoodfacts.org/api/v0/product/";

  public constructor(private http: HttpClient) {}

  searchData(product: string): Observable<any> {
    return this.http
      .get(`${this.url}${encodeURI(product)}.json`);
  }
}
