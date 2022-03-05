const mongoose = require('mongoose');
const Instrumentschema = new mongoose.Schema({
name: {type: String,required: true},
//Price:{type:String,required: true},
Price: [{
    Color: {type: String,required: true},
    rate:  {type: String,required: true},
    
    }],
rating: {type: Number, "default": 0, min: 0, max: 5},
Avaliability:{type: Boolean,required: true},
Color:{type: String,required: true},
Quantity:{type: Number, "default": 0, min: 0, max: 10},
reviews: [{
    author: {type: String},
    star_rating: {type: Number, "default": 0, min: 0, max: 5},
    timestamp:  {type: String},
    reviewText: {type: String}
    }],
  Shipping:[{
      FromDate: {type: String},
      ToDate: {type: String},
  }]  

});
mongoose.model('instrument', Instrumentschema);