import { Component, OnInit } from '@angular/core';
import { Shoe } from '../shoe';
import { ShoeServiceService } from '../shoe.service';
import { switchMap } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [ShoeServiceService]
})
export class DetailsComponent implements OnInit {
  public shoe: Shoe
  public selectedColor: number = 0

  constructor(
    private shoeService: ShoeServiceService,
    private route: ActivatedRoute
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
    const url = this.shoe.color[this.selectedColor].imageColor
    return url
  }

}
