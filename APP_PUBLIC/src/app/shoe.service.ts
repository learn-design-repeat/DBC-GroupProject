import { Injectable } from '@angular/core';
import { Shoe} from './shoe'; 
import {HttpClient, HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ShoeServiceService {
  editnewshoe(newshoe: Shoe) {
    throw new Error('Method not implemented.');
  }

  private shoeUrl = 'http://localhost:3000/api/shoe';  
  private cartURL = 'http://localhost:3000/api/cart'; 
  constructor(private http:HttpClient){}
  getShoe() : Promise<void | Shoe[]>{ 
    return this.http.get(this.shoeUrl) 
    .toPromise() 
    .then(response => response as Shoe[]) 
    .catch(this.handleError);  
   }


   getSingleshoe(shoeId: string): Promise<void | Shoe>{ 
    return this.http.get(this.shoeUrl + '/' + shoeId) 
    .toPromise() 
    .then(response => response as Shoe) 
    .catch(this.handleError); 
  }  
  
   createshoe(newshoe: Shoe): Promise<void | Shoe> {     
    console.log("createeeeee", newshoe)
    return this.http.post(this.shoeUrl, newshoe) 
    .toPromise() 
    .then(response => response as Shoe) 
    .catch(this.handleError);   
   }


   deletealbum(shoeId: string): Promise<void | Shoe>
    {
      return this.http.request('DELETE',this.shoeUrl + '/' + shoeId) 
      .toPromise() 
      .then(response => response as Shoe) 
      .catch(this.handleError); 

    }

    updatenewshoe(newshoe: Shoe): Promise<void | Shoe> {     
      return this.http.put(this.shoeUrl+ '/' +  newshoe._id,newshoe) 
      .toPromise() 
      .then(response => response as Shoe) 
      .catch(this.handleError);   
    }

    /* Cart - REST APIS */
    getCartShoes() : Promise<void | Shoe[]>{ 
      return this.http.get(this.cartURL) 
      .toPromise() 
      .then(response => response as Shoe[]) 
      .catch(this.handleError);  
     }  
    
    addShoeCart(newshoe: Shoe): Promise<void | Shoe> { 
      console.log("within addShoe", newshoe)    
      return this.http.post(this.cartURL, newshoe) 
      .toPromise() 
      .then(response => response as Shoe) 
      .catch(this.handleError);   
    }

    deleteCartShoe(shoeId: string): Promise<void | Shoe>
      {
        return this.http.delete(this.cartURL + '/' + shoeId) 
        .toPromise() 
        .then(response => response as Shoe) 
        .catch(this.handleError); 
  
      }
    /* Cart - APIS End> */
  
    private handleError(error: any){ 
    console.log("error");   
    } 
  
}
