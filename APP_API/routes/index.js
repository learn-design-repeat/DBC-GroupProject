const express = require('express');
const router = express.Router();

const ctrlShoes=require('../controllers/Shoe');

// food
router.get('/Shoe', ctrlShoes.getshoe);
router.post('/Shoe', ctrlShoes.createshoe);

router.get('/Shoe/:instrumentid', ctrlShoes.getsingleshoeOrder);
router.put('/Shoe/:instrumentid', ctrlShoes.updateshoeorder);
router.delete('/Shoe/:instrumentid', ctrlShoes.deleteshoeorder);
module.exports = router;