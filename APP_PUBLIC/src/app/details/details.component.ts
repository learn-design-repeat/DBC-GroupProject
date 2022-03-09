import { Component, OnInit } from '@angular/core';
import { Shoe, colorschema } from '../shoe';
import { ShoeServiceService } from '../shoe.service';
import { switchMap } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [ShoeServiceService]
})
export class DetailsComponent implements OnInit {
  public shoe: Shoe;
  public cartshoe: Shoe = {
    Name: '',
    Brand: '',
    modelNumber: '',
    Price: 0,
    Size: '',
    color: [{Colour:'' , imageColor:''}]
  }
  public selectedColor: number = 0
  public color : colorschema;

  constructor(
    private shoeService: ShoeServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {
      return this.shoeService.getSingleshoe(params["id"])
    }))
      .subscribe((shoe: Shoe | void) => {
        if (shoe) {
          this.shoe = shoe
          console.log("🚀 ~ file: details.component.ts ~ line 28 ~ DetailsComponent ~ .subscribe ~ this.shoe.color", this.shoe.color)
        }
      })
  }

  get shoeImage() {
    const url = `../../assets/images/` + this.shoe.color[this.selectedColor].imageColor + `.jpg`
    return url
  }

  public addShoeToCart(shoe: Shoe) {
    
    // this.color.Colour = this.shoe.color[this.selectedColor].Colour;
    // this.color.imageColor = this.shoeImage;
    // shoe.color[0] = this.color;
    this.cartshoe.Brand = shoe.Brand;
    this.cartshoe.Name = shoe.Name;
    this.cartshoe.Price = shoe.Price;
    this.cartshoe.modelNumber = shoe.modelNumber
    this.cartshoe.color[0].Colour = this.shoe.color[this.selectedColor].Colour;
    this.cartshoe.color[0].imageColor = this.shoeImage;
    this.shoeService.addShoeCart(this.cartshoe);
    console.log("add shoe", this.cartshoe)
    this.router.navigateByUrl('/cart');
  }

}
