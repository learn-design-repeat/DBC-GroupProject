
const list_display = function (req, res) {

    res.render('list_display', { Instruments: Music });
};



const Music = [

    {

        name: "Guitar",
        image: "/static/guitar.jpg",
        Title: "Guitar",
        Cardtext:"PRS John Mayer SE Silver Sky Electric Guitar - Stone Blue",
        carddesc: "PRS SE Silver Sky, John Mayer Signature Model, Right Handed Electric Guitar, Poplar Body, Maple Neck, Rosewood Fretboard, 3 Single-Coil Pickups, Stone Blue Finish, with Gig Bag.",
        Price:"$1,019.00"

    },

    {

        name: "Drums",
        image: "/static/piano.jpg",
        Title: "Keyboard",
        Cardtext:"Yamaha PSRE373 61-Key Touch Sensitive Portable Keyboard",
        carddesc: "Yamaha PSR-E373, Portable Keyboard / Arranger, 61-Key, 622 Voices, 1/8-Inch Auxiliary Input, Black Finish.",
        Price:"$269.99"

    },

    {

        name: "Keyboard",
        image: "/static/drums.jpg",
        Title: "Drums",
        Cardtext:"Ludwig Pocket Kit Series 4-Piece Drum Set - 16/12SD/13FT/10",
        carddesc: "Hardware, Cymbals, Throne, Red Wine Sparkle",
        Price:"$349.99"

    },
    {

        name: "Mandolin",
        image: "/static/mandolin.jpg",
        Title: "Mandolin",
        Cardtext:"Ludwig Pocket Kit Series 1-Piece Mandolin Set - 16/12SD/13FT/10",
        carddesc: " Mahogany DML-1 With Tuner String Big Bag and Guitar Picks",
        Price:"$124.99"

    },
    {

        name: "Harmonica",
        image: "/static/harmonica.jpg",
        Title: "Harmonica",
        Cardtext:"Ludwig Pocket Kit Series 1-Piece Harmonica Set - 16/12SD/13FT/10",
        carddesc: " Mahogany DML-1 With Tuner String Big Bag and Harmonica Picks",
        Price:"$156.99"

    },
    {

        name: "Trumpet",
        image: "/static/trumpet.jpg",
        Title: "Trumpet",
        Cardtext:"Ludwig Pocket Kit Series 1-Piece Trumpet Set - 16/12SD/13FT/10",
        carddesc: " Mahogany DML-1 With Tuner String Big Bag and Harmonica Picks",
        Price:"$356.99"

    },
    {

        name: "Clarinet",
        image: "/static/clarinet.jpg",
        Title: "Clarinet",
        Cardtext:"Ludwig Pocket Kit Series 1-Piece Clarinet Set - 16/12SD/13FT/10",
        carddesc: " Mahogany DML-1 With Tuner String Big Bag and Harmonica Picks",
        Price:"$356.99"

    },
    {

        name: "Harp",
        image: "/static/harp.jpg",
        Title: "Harp",
        Cardtext:"Ludwig Pocket Kit Series 1-Piece Harp Set - 16/12SD/13FT/10",
        carddesc: " Mahogany DML-1 With Tuner String Big Bag and Harmonica Picks",
        Price:"$256.99"

    }




]

module.exports = {

    list_display
};