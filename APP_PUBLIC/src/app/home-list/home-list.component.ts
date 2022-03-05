import { Component, OnInit } from '@angular/core';
import { Instrument} from '../instrument'; 
import { InstrumentServiceService} from "../instrument-service.service";

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  providers: [InstrumentServiceService]
})
export class HomeListComponent implements OnInit {

  instruments: Instrument[]   
  constructor( private instrumentService: InstrumentServiceService) {  }   
  ngOnInit(): void 
  { this.instrumentService 
    .getInstrument() 
    .then((instrument) => {
       this.instruments = instrument as Instrument[]
    });  

  }

}
