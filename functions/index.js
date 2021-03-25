/* eslint-disable */
const functions = require("firebase-functions");
// express back end
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51IVztaCFAWB2guHBeGxQYHi8LdFyh3jmsFkBcFE5TsA0FREZpa1dBwFmBLB41KeVqIIl5nbahUSA6vQXKgu0kePW00F3KGiVC3")

// app config
const app = express();

// middlewares
app.use(cors({origin: true}));
app.use(express.json());

// api Routes
app.get("/", (request, response) => response.status(200).send("Hello"));

app.post("/payments/create", async (request, response) => { 
    const total = request.query.total;   // same as payment.js url (line 28)
    // console.log(`payment request received`, total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  // in pennies not pounds
        currency: "gbp",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,

    })
})

// listen command
exports.api = functions.https.onRequest(app);
