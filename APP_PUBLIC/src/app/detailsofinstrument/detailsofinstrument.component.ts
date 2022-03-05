import { Component, OnInit } from '@angular/core';
import { Instrument } from '../instrument';
import { InstrumentServiceService } from '../instrument-service.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailsofinstrument',
  templateUrl: './detailsofinstrument.component.html',
  styleUrls: ['./detailsofinstrument.component.css'],
  providers: [InstrumentServiceService]
})
export class DetailsofinstrumentComponent implements OnInit {


  constructor(private instrumentservice: InstrumentServiceService, private route: ActivatedRoute,private router: Router) { }
  newinstrument: Instrument;
  pageContent = {
    header: {
      title: '', body: ''
    }
  };


  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {
   return this.instrumentservice.getSingleinstrument(params['instrumentid']);
    }))
      .subscribe((newinstrument: Instrument) => {
        console.log('Selected instrument', this.newinstrument);
        this.newinstrument = newinstrument;
        this.pageContent.header.title = this.newinstrument.name;
        this.pageContent.header.body = 'Details for selected Instrument.';
      });
  }

  public deletealbum()
  {
  if(confirm('Do you want to delete this album?'))
  {
  this.instrumentservice.deletealbum(this.newinstrument._id).then(()=>
  {
  alert('Album deleted successfully');
  this.router.navigateByUrl('/albums')
  })
  }
}

  public Editalbum()
  {
this.router.navigateByUrl('Update/'+this.newinstrument._id)
  }
  

}
