
const mongoose = require("mongoose");
const CartList = mongoose.model('Cart');
const getshoe=function(req,res)
{
    CartList.find().exec(function (err, shoedata) {
        if (err) {
            res
                .status(404)
                .json(err);
            return;
        }
        res
            .status(200)
            .json(shoedata);
    })

};
const createshoe=function(req,res)
{
    CartList.create(req.body, (err, shoedata) => {
        console.log("Create shoe entry in the cart", shoedata);
        if (err) {
            res
                .status(404)
                .json(err);
            return;
        }
        res
            .status(201)
            .json(shoedata);
    })

};
const getsingleshoeOrder=function(req,res)
{
    CartList
        .findById(req.params.shoeid)
        .exec((err, shoedata) => {
            if (!shoedata) {
                return res
                    .status(404)
                    .json({
                        "message": "Shoes data not found"
                    });
            } else {
                res
                .status(200)
                .json(shoedata);
            }

        });

};
const updateshoeorder=function(req,res)
{
    if (!req.params.shoeid) {
        res
            .status(404)
            .json({
                "message": "Not found, Shoes is required"
            });
        return;
    }
    CartList.findById(req.params.shoeid)
        .exec((err, shoedata) => {
            if (!shoedata) {
                res
                    .stats(404)
                    .json({
                        "message": "Shoes not found"
                    });
                return;
            }
            musicdata.name = req.body.name;
            musicdata.Quantity = req.body.Quantity;
            musicdata.Color = req.body.Color;
            musicdata.save((err, shoedata) => {
                if (err) {
                    res
                        .status(404)
                        .json(err);
                } else {
                    res
                        .status(200)
                        .json(shoedata);
                }
            });
        });
};

const deleteshoeorder=function(req,res)
{
    const shoeid = req.params.shoeid;
    if (shoeid) {
        CartList
            .findByIdAndRemove(shoeid)
            .exec((err, shoedata) => {
                if (err) {
                    res
                        .status(404)
                        .json(err);
                    return;
                }
                res
                    .status(204)
                    .json(null);
            });
    } else {
        res
            .status(404)
            .json({ "message": "No Shoesid" });
    }

};
module.exports= {
    getshoe,
    createshoe,
    getsingleshoeOrder,
    deleteshoeorder

   };