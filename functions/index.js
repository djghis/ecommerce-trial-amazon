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
app.get("/", (request, response) => res.status(200).send("Hello"))
// listen command
exports.api = functions.https.onRequest(app)