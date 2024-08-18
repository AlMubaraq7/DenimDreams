const express = require("express");
const cors = require("cors");
const { paymentRouter } = require("./routes/payment");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://denim-dreams.vercel.app",
  })
);
app.use(paymentRouter);
module.exports = { app };
