/* GET home page */
const index = function (req, res) {

    res.render('index', { title: 'Fifth symphony' });
};
module.exports = {

    index
};