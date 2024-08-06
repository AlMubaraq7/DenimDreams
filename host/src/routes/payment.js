const express = require("express");
const { secretKey } = require("../../config");
const stripe = require("stripe")(secretKey);
const paymentRouter = express.Router();
paymentRouter.post("/create-payment-session", async (req, res) => {
  const { products, email } = await req.body;
  const lineItems = await products?.map((product) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: product.name,
        images: [product.imageUrl],
      },
      unit_amount: product.price * 100,
    },
    quantity: product.quantity,
  }));
  const session = await stripe.checkout.sessions.create({
    customer_email: email,
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:5173/collections",
    cancel_url: "http://localhost:5173/collections/mens",
  });
  console.log(session);
  res.json({ id: session?.id });
});

module.exports = { paymentRouter };
