var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlAbout = require('../controllers/about');
const ctrllist = require('../controllers/list');
const ctrlMusic = require('../controllers/Instrument');
/*app.use(express.static('public'))*/

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});


router.get('/', ctrlMain.index);
router.get('/about', ctrlAbout.ListHead);
router.get('/list', ctrlMusic.Instrumentlist);
router.get('/instrument/:instrumentId', ctrlMusic.InstrumentInfo);
router.route('/new')
      .get(ctrlMusic.addNewinstrument)
      .post(ctrlMusic.doAddNewInstrument);
module.exports = router;
