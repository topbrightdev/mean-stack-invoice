const express = require('express');
const router = express.Router();
const invoiceController =require('../controllers/invoive.Controller')




router.get('/invoice' , invoiceController().findAll)
router.get('/invoice/:id' , invoiceController().findOne);
router.post('/invoice' , invoiceController().createInvoice);
router.delete('/invoice/:id' , invoiceController().deleteOne)
router.put('/invoice/:id' , invoiceController().updateInvoice)


module.exports = router;