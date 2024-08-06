const express = require("express");
const cors = require("cors");
const { paymentRouter } = require("./routes/payment");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(paymentRouter);
module.exports = { app };
