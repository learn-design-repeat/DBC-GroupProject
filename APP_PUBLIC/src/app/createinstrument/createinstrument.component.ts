import { Component, OnInit } from '@angular/core';
import {InstrumentServiceService} from '../instrument-service.service'; 
import {Instrument} from '../instrument'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-createinstrument',
  templateUrl: './createinstrument.component.html',
  styleUrls: ['./createinstrument.component.css'],
  providers: [InstrumentServiceService]
})
export class CreateinstrumentComponent implements OnInit {

  //schema for CreateinstrumentComponent
  public newinstrument: Instrument = {
    name: '',
    rating: 0,
    Avaliability: true,
    Color: '',
    Quantity: 0,
    img_tag:'a4.jpg',
    Price: undefined,
    reviews: undefined,
    Shipping: undefined,
    
  }; 
  instrumentservice: any;
  constructor(private instrumentService: InstrumentServiceService,private router: Router) { } 
  ngOnInit(): void { 
  } 
  //create a new instrument and on submit button click alert will be shown and redirected to home page
  public createNewinstrument(newinstrument: Instrument): void{ 
    this.instrumentService.createinstrument(newinstrument).then(()=>
    { 
      alert('Added the album successfully');
      this.router.navigateByUrl('/'); 
    }); 
  }
 



}
