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
app.get("/", (req, res) => {
  res.send("<h1>DenimDreams</h1>");
});

module.exports = { app };
// https://denim-dreams.vercel.app
