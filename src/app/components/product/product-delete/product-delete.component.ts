import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Product } from "../product.model";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {
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

  deleteProduct(): void {
    this.service.delete(this.product.id as number).subscribe({
      next: () => {
        this.service.showMessage("Produto excluido com sucesso!");
        this.router.navigate(["/products"]);
      },
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
