import { Injectable } from '@angular/core';
import { Instrument} from './instrument'; 
import {HttpClient, HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InstrumentServiceService {
  editnewinstrument(newinstrument: Instrument) {
    throw new Error('Method not implemented.');
  }

  private instrumentUrl = 'http://localhost:3000/api/instrument';   
  constructor(private http:HttpClient){}
  getInstrument() : Promise<void | Instrument[]>{ 
    return this.http.get(this.instrumentUrl) 
    .toPromise() 
    .then(response => response as Instrument[]) 
    .catch(this.handleError);  
   }


   getSingleinstrument(instrumentId: string): Promise<void | Instrument>{ 
    return this.http.get(this.instrumentUrl + '/' + instrumentId) 
    .toPromise() 
    .then(response => response as Instrument) 
    .catch(this.handleError); 
  }  
  
  createinstrument(newinstrument: Instrument): Promise<void | Instrument> {     
    return this.http.post(this.instrumentUrl, newinstrument) 
    .toPromise() 
    .then(response => response as Instrument) 
    .catch(this.handleError);   
  }


  deletealbum(instrumentId: string): Promise<void | Instrument>
    {
      return this.http.request('DELETE',this.instrumentUrl + '/' + instrumentId) 
      .toPromise() 
      .then(response => response as Instrument) 
      .catch(this.handleError); 

    }

    updatenewinstrument(newinstrument: Instrument): Promise<void | Instrument> {     
      return this.http.put(this.instrumentUrl+ '/' +  newinstrument._id,newinstrument) 
      .toPromise() 
      .then(response => response as Instrument) 
      .catch(this.handleError);   
    }
  
    private handleError(error: any){ 
    console.log("error");   } 
  
}
