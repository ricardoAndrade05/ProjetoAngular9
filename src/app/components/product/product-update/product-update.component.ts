import { Product } from "./../product.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.css"],
})
export class ProductUpdateComponent implements OnInit {
  product: Product;
  
  constructor(
    private service: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get("id") as string;
    this.service.readById(id).subscribe({
      next: (product) => {
        this.product = product;
      },
    });
  }

  updateProduct(): void {
    this.service.update(this.product).subscribe({
      next: () => {
        this.service.showMessage("Produto atualizado com sucesso!");
        this.router.navigate(["/products"]);
      },
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
