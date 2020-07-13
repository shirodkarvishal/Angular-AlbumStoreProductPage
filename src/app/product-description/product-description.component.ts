import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Album } from '../album';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  albumInfo: Album;
  id: number;
  constructor(private _productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });

    this._productService.getAlbum(this.id).subscribe(
      response => {
        this.albumInfo = response;
        console.log(this.albumInfo);
      }
    );
  }

}
