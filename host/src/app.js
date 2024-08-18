const express = require("express");
const cors = require("cors");
const { paymentRouter } = require("./routes/payment");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["https://denim-dreams.vercel.app", "http://localhost:5173"],
  })
);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "..", "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(
      path.join(__dirname, "..", "..", "client/build", "index.html")
    );
  });
}
app.use(paymentRouter);
app.get("/", (req, res) => {
  res.send("<h1>DenimDreams</h1>");
});

module.exports = { app };
