import { Component, OnInit } from '@angular/core';
import { Shoe } from '../shoe';
import { ShoeServiceService } from '../shoe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ShoeServiceService]
})

export class CreateComponent implements OnInit {
  public newshoe: Shoe = {
    Name: '',
    Price: 0,
    modelNumber: '',
    Brand: '',
    Size: '',
    color: [{
        Colour: '',
        imageColor: '',
    }]
}

  constructor(private shoeService: ShoeServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  public createNewshoe(newshoe: Shoe): void {
    console.log("sanjana creating a new shoe", newshoe);
    this.shoeService.createshoe(newshoe);
    this.router.navigateByUrl('/shoes');
  }
}
