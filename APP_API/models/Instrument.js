const mongoose = require('mongoose');
const reviewsschema = new mongoose.Schema([{
    author: {type: String},
    star_rating: {type: Number, "default": 0, min: 0, max: 5},
    timestamp:  {type: String},
    reviewText: {type: String}
}]);
const Priceschema=new mongoose.Schema([{
    color: {type: String,required: true},
    rate:  {type: String,required: true},
}]);
const shippingschema=new mongoose.Schema([{
    FromDate: {type: String},
    ToDate: {type: String},
}])
const InstrumentSchema = new mongoose.Schema({
    name: {type: String,required: true},
    Price: [Priceschema],
    rating: {type: Number, "default": 0, min: 0, max: 5},
    Avaliability:{type: Boolean,required: true},
    Color:{type: String,required: true},
    Quantity:{type: Number, "default": 0, min: 0, max: 10},
    reviews: [reviewsschema],
    Shipping:[shippingschema],
    img_tag: {type: String} 
     });
mongoose.model('Instrument', InstrumentSchema,'Instruments');