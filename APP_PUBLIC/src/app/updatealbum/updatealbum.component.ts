import { Component, OnInit } from '@angular/core';
import {InstrumentServiceService} from '../instrument-service.service'; 
import { switchMap } from 'rxjs/operators';
import { Instrument } from '../instrument';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-updatealbum',
  templateUrl: './updatealbum.component.html',
  styleUrls: ['./updatealbum.component.css'],
  providers:[InstrumentServiceService]
})
//schema for updatecomponent
export class UpdatealbumComponent implements OnInit {
  // public updateinstrument: Instrument = {
  //   name: '',
  //   rating: 0,
  //   Avaliability: true,
  //   Color: '',
  //   Quantity: 0,
  //   img_tag:'a4.jpg',
  //   Price: undefined,
  //   reviews: undefined,
  //   Shipping: undefined,
    
  // };

  newinstru: Instrument;
  instrumentService: any;

  constructor(private instrumentserv:InstrumentServiceService,private router:Router,private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {
      return this.instrumentserv.getSingleinstrument(params["instrumentid"])
  }))
  .subscribe((newinstru: Instrument) => {
    this.newinstru = newinstru;
  })
  }

  //update new instrument code and navigate url to list page 
  public updatenewinstrument(newinstru: Instrument): void{ 
    this.instrumentserv.updatenewinstrument(newinstru).then(()=>
    { 
      alert('Added the album successfully');
      this.router.navigateByUrl('/Details/'+newinstru._id); 
    }); 
  }

}
