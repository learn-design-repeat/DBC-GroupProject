export class Shoe {
    _id?: string;
    Name: String;
    Brand: String;
    modelNumber: String;
    Price: Number;
    color: [colorschema];
    Size: String;
}
export interface colorschema {
    Colour: String;
    imageColor: String;
}
