import { Component, OnInit } from '@angular/core';
import { Shoe } from '../shoe';
import { ShoeServiceService } from '../shoe.service';
import { Router } from '@angular/router';
import { Decimal128 } from 'mongoose';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ShoeServiceService]
})
export class CartComponent implements OnInit {

  shoes: Shoe[]
  subTotal: number;
  tax;
  shipping;
  orderTotal;

  constructor(private shoeService: ShoeServiceService, private router: Router ) { }

  ngOnInit(): void {
    this.shoeService 
        .getCartShoes() 
        .then((shoe) => {
            this.shoes = shoe as Shoe[];      
            this.updateCartTotal(); 
        });
     
  }

  
  private updateCartTotal() {
    this.subTotal = 0;
    if(this.shoes) {
      this.shoes.forEach(element => {
      this.subTotal = this.subTotal + (element.Price as unknown as number);
      console.log(this.subTotal);
    });
    console.log(this.subTotal);
    this.tax = (this.subTotal * (13/100)) + this.subTotal;
    this.shipping = 8;
    this.orderTotal = this.subTotal + this.tax + this.shipping;
  }}

  public addShoeToCart(shoe: Shoe) {
    this.shoeService.createshoe(shoe);
    this.router.navigateByUrl('/cart');
  }

  public deleteShoeCart(shoe: Shoe) {
    this.shoeService.deleteCartShoe(shoe._id);
    location.reload();
  }
}
