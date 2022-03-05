export class Instrument {
    _id?: string;
    name: string;
    rating:number;
    Avaliability:boolean;
    Color:string;
    Quantity:number;
    Price:Priceschema;
    reviews: reviewsschema;
    Shipping:shippingschema;
    img_tag:string 

}

interface reviewsschema{
    author:string;
    star_rating:number;
    timestamp:string;
    reviewText:string;
}

interface shippingschema{
    FromDate:string;
    ToDate:string;
}

interface Priceschema{
    color:string;
    rate:string;
}
