import { Component } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Subscription } from "rxjs";
import { ZBarOptions, ZBar } from "@ionic-native/zbar/ngx";

@Component({
  selector: "app-products",
  templateUrl: "./products.page.html",
  styleUrls: ["./products.page.scss"]
})
export class ProductsPage {
  currentProduct: any = null;
  searchTerm: string = "";
  subsciption: Subscription;
  zbarOptions: any;
  scannedResult: any;

  public constructor(
    private productService: ProductService,
    private zbar: ZBar
  ) {}

  public searchChanged(): void {
    let product = null;

    this.productService.searchData(this.searchTerm).subscribe(result => {
      product = result.product;
      this.currentProduct = product.product_name;
    });
  }

  scanCode() {
    let options: ZBarOptions = {
      flash: "off",
      drawSight: false
    };

    this.zbar
      .scan(options)
      .then(result => {
        console.log(result); // Scanned code
        this.searchTerm = result;
        this.searchChanged();
        // router to product page

      })
      .catch(error => {
        alert(error); // Error message
      });
  }
}
