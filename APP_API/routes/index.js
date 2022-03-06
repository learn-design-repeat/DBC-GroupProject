const express = require('express');
const router = express.Router();

const ctrlShoes=require('../controllers/Shoe');

// food
router.get('/Shoe', ctrlShoes.getshoe);
router.post('/Shoe', ctrlShoes.createshoe);

router.get('/Shoe/:shoeid', ctrlShoes.getsingleshoeOrder);
router.put('/Shoe/:shoeid', ctrlShoes.updateshoeorder);
router.delete('/Shoe/:shoeid', ctrlShoes.deleteshoeorder);

router.get('/cart', ctrlShoes.getshoe);
router.post('/cart', ctrlShoes.createshoe)
router.delete('/cart/:shoeid', ctrlShoes.deleteshoeorder);
module.exports = router;