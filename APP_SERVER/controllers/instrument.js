const request = require('request');
const { response } = require('../../app');
const apiOptions = {
    server: 'http://localhost:3000'
};

/* GET home page 
const foodlist = function (req, res) {

    res.render('foodlist', { foods: foodArray });
    
};
const favouriteFood = function (req, res) {

    res.render('favourite-food', { foodiefavourite: myFavFood});
};

const myFavFood = {

    name: "Biriyani",

    type: "Lunch"

}
const foodArray = [

    {

        name: "Idly",

        type: "BreakFast"

    },

    {

        name: "Biriyani",

        type: "Lunch"

    },

    {

        name: "Biriyani",

        type: "Dinner"

    }

]*/
const Instrumentlist= function(req,res){
    const path='/api/Instrument';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(
    requestOptions,
    (err,response,body)=> {
        _renderListpage(req,res,body);
    }
    );
};
const _renderListpage=function(req, res, responseBody) {
    console.log(responseBody);
    res.render('list', {
        Instrument: responseBody
    });
};

const InstrumentInfo= function(req,res){
    const path=`/api/instrument/${req.params.instrumentId}`;
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(
    requestOptions,
    (err,response,body)=> {
        _renderDetailspage(req,res,body);
    }
    );
};
const _renderDetailspage=function(req, res, responseBody) {
    res.render('details', {
        Instrument: responseBody
    });
};
// const _renderDetailPage =function (req, res, responseBody) {
//     res.render('food-info', {
//         currentFood:responseBody
//     });
// };
// const foodInfo = function(req, res){
//     const path = `/api/foods/${req.params.foodid}`;
//     const requestOptions = {
//         url: apiOptions.server + path,
//         method : 'GET',
//         json : {}
//     };
//     request(
//     requestOptions,
//     (err, response, body) => {
//         _renderDetailPage(req, res, body);
//     }   
//     );

//     };

const _renderCreatePage = function(req,res)
{
    res.render('create-instrument',{
        title:"Create New Food"
    });
}

const addNewinstrument =function(req,res)
{
    _renderCreatePage(req,res);
}

const doAddNewInstrument= function(req,res)
{
    const pricingArray = [];
    pricingArray.push({
        color: req.body.Color,
        rate: req.body.price
    })
    const path='/api/instrument';
    const postdata={
        name: req.body.name,
        Color: req.body.Color,
        Price: pricingArray,
        Avaliability: req.body.Availability === 'on' ? true : false
    };
    const requestOptions={
        url:apiOptions.server+path,
        method:'POST',
        json:postdata
    };
    request(
    requestOptions,
    (err,response,body)=>{
        console.log(response, 'response')
        console.log(err, 'err')
        if(response.statusCode===201){
           res.redirect('/list');
        }
    }    
    );
};
module.exports = {
    Instrumentlist,
    InstrumentInfo,
    addNewinstrument,
    doAddNewInstrument
};