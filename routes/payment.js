const express = require('express');
const razorpay = require('../config/razorpay');

const router = express.Router();

router.post('/create-order',
async (req, res) => {

  const { amount } = req.body;

  try {

    const order =
      await razorpay.orders.create({

        amount: amount * 100,

        currency: 'INR',

        receipt:
          'receipt_' +
          Date.now()

      });

    res.json(order);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: 'Order Creation Failed'
    });

  }

});



const crypto =
require('crypto');

router.post('/verify-payment',
async (req,res)=>{

 const {

 razorpay_order_id,

 razorpay_payment_id,

 razorpay_signature,

 userId,

 planName,

 amount

 } = req.body;

 const expectedSignature =

 crypto
 .createHmac(
   'sha256',
   process.env
   .RAZORPAY_KEY_SECRET
 )
 .update(
   razorpay_order_id +
   '|' +
   razorpay_payment_id
 )
 .digest('hex');

 if(
  expectedSignature !==
  razorpay_signature
 ){

  return res.status(400)
  .json({
    success:false
  });

 }

 // Activate Plan

});










module.exports = router;