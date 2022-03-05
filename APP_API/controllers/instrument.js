
const mongoose = require("mongoose");
const Musicinstruments = mongoose.model('Instrument');
const getInstrument=function(req,res)
{
    Musicinstruments.find().exec(function (err, musicdata) {
        if (err) {
            res
                .status(404)
                .json(err);
            return;
        }
        res
            .status(200)
            .json(musicdata);
    })

};
const createInstrumentOrder=function(req,res)
{
    Musicinstruments.create(req.body, (err, musicdata) => {
        if (err) {
            res
                .status(404)
                .json(err);
            return;
        }
        res
            .status(201)
            .json(musicdata);
    })

};
const getsingleInstrumentOrder=function(req,res)
{
    Musicinstruments
        .findById(req.params.instrumentid)
        .exec((err, musicdata) => {
            if (!musicdata) {
                return res
                    .status(404)
                    .json({
                        "message": "Musicinstruments data not found"
                    });
            } else {
                res
                .status(200)
                .json(musicdata);
            }

        });

};
const updateInstrumentorder=function(req,res)
{
    if (!req.params.instrumentid) {
        res
            .status(404)
            .json({
                "message": "Not found, Musicinstrumentsid is required"
            });
        return;
    }
    Musicinstruments.findById(req.params.instrumentid)
        .exec((err, musicdata) => {
            if (!musicdata) {
                res
                    .stats(404)
                    .json({
                        "message": "Musicinstrumentsid not found"
                    });
                return;
            }
            musicdata.name = req.body.name;
            musicdata.Quantity = req.body.Quantity;
            musicdata.Color = req.body.Color;
            musicdata.save((err, musicdata) => {
                if (err) {
                    res
                        .status(404)
                        .json(err);
                } else {
                    res
                        .status(200)
                        .json(musicdata);
                }
            });
        });
};

const deleteInstrumentorder=function(req,res)
{
    const Instrumentid = req.params.instrumentid;
    if (Instrumentid) {
        Musicinstruments
            .findByIdAndRemove(Instrumentid)
            .exec((err, musicdata) => {
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
            .json({ "message": "No Musicinstrumentsid" });
    }

};
module.exports= {
    getInstrument,
    createInstrumentOrder,
    getsingleInstrumentOrder,
    updateInstrumentorder,
    deleteInstrumentorder

   };