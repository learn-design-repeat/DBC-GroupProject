import { Component, OnInit } from '@angular/core';
import { Shoe } from '../shoe';
import { ShoeServiceService } from '../shoe.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  providers: [ShoeServiceService]
})
export class HomeListComponent implements OnInit {

  newshoe: Shoe[];
  constructor(private shoeService: ShoeServiceService) { }
  ngOnInit(): void {
    this.shoeService
      .getShoe()
      .then((response) => {
        this.newshoe = response as Shoe[]
      });

  }
}
