const express = require('express');
const router = express.Router();

const ctrlShoes=require('../controllers/Shoe');
const ctrlCart=require('../controllers/Cart');

//food
router.get('/Shoe', ctrlShoes.getshoe);
router.post('/Shoe', ctrlShoes.createshoe);

router.get('/Shoe/:shoeid', ctrlShoes.getsingleshoeOrder);
router.put('/Shoe/:shoeid', ctrlShoes.updateshoeorder);
router.delete('/Shoe/:shoeid', ctrlShoes.deleteshoeorder);

router.get('/cart', ctrlCart.getshoe);
router.get('/cart/:shoeid', ctrlCart.getsingleshoeOrder);
router.post('/cart', ctrlCart.createshoe)
router.delete('/cart/:shoeid', ctrlCart.deleteshoeorder);
module.exports = router;