const express = require('express');
const router = express.Router();

const ctrlInstrument=require('../controllers/instrument');

// food
router.get('/instrument', ctrlInstrument.getInstrument);
router.post('/instrument', ctrlInstrument.createInstrumentOrder);

router.get('/instrument/:instrumentid', ctrlInstrument.getsingleInstrumentOrder);
router.put('/instrument/:instrumentid', ctrlInstrument.updateInstrumentorder);
router.delete('/instrument/:instrumentid', ctrlInstrument.deleteInstrumentorder);
module.exports = router;