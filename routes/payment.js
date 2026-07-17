const express = require("express");
const axios = require("axios");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();
// console.log("Payment Route Loaded");

router.post(
    "/create-order",
    authMiddleware,
    async (req, res) => {

        try {

            const { amount, plan } = req.body;

            const orderId =
                "ORDER_" +
                Date.now() +
                "_" +
                req.user.userId;

            const response =
                await axios.post(

                    process.env.CASHFREE_ENV === "production"
                        ? "https://api.cashfree.com/pg/orders"
                        : "https://sandbox.cashfree.com/pg/orders",

                    {

                        order_id: orderId,

                        order_amount: amount,

                        order_currency: "INR",

                        customer_details: {

                            customer_id:
                                req.user.userId,

                            customer_email:
                                req.user.email,

                            customer_phone:
                                "9999999999"

                        },

                        order_meta: {

                            return_url:
                                "http://localhost:4200/payment-status?order_id={order_id}"

                        }

                    },

                    {

                        headers: {

                            "x-client-id":
                                process.env.CASHFREE_CLIENT_ID,

                            "x-client-secret":
                                process.env.CASHFREE_CLIENT_SECRET,

                            "x-api-version":
                                "2023-08-01",

                            "Content-Type":
                                "application/json"

                        }

                    }

                );

            res.json({

                success: true,

                paymentSessionId:
                    response.data.payment_session_id,

                orderId:
                    response.data.order_id

            });

        }

        catch (err) {

            console.log(
                err.response?.data ||
                err.message
            );

            res.status(500).json({

                success: false,

                message:
                    "Unable to create payment."

            });

        }

    }

);





module.exports = router;







































// const express = require('express');
// const razorpay = require('../config/razorpay');

// const router = express.Router();

// router.post('/create-order',
// async (req, res) => {

//   const { amount } = req.body;

//   try {

//     const order =
//       await razorpay.orders.create({

//         amount: amount * 100,

//         currency: 'INR',

//         receipt:
//           'receipt_' +
//           Date.now()

//       });

//     res.json(order);

//   } catch (err) {

//     console.log(err);

//     res.status(500).json({
//       message: 'Order Creation Failed'
//     });

//   }

// });



// const crypto =
// require('crypto');

// router.post('/verify-payment',
// async (req,res)=>{

//  const {

//  razorpay_order_id,

//  razorpay_payment_id,

//  razorpay_signature,

//  userId,

//  planName,

//  amount

//  } = req.body;

//  const expectedSignature =

//  crypto
//  .createHmac(
//    'sha256',
//    process.env
//    .RAZORPAY_KEY_SECRET
//  )
//  .update(
//    razorpay_order_id +
//    '|' +
//    razorpay_payment_id
//  )
//  .digest('hex');

//  if(
//   expectedSignature !==
//   razorpay_signature
//  ){

//   return res.status(400)
//   .json({
//     success:false
//   });

//  }

//  // Activate Plan

// });










// module.exports = router;