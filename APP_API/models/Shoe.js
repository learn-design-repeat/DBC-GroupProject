const mongoose = require('mongoose');

const colorschema = new mongoose.Schema([{
    Colour: { type: String },
    imageColor: { type: String },
}])
const ShoesSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Brand: { type: String, required: true },
    modelNumber: { type: String, required: true },
    Price: { type: String, required: true },
    color: [colorschema],
    Size: String
});
mongoose.model('Shoe', ShoesSchema, 'Shoes');