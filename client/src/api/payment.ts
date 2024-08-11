import { loadStripe } from "@stripe/stripe-js"
import { ClothingItem } from "../utils"
export const createPaymentSession = async (
  cartItems: ClothingItem[],
  email: string,
) => {
  try {
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)
    const body = {
      products: cartItems,
      email: email,
    }
    const header = {
      "Content-Type": "application/json",
    }
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/create-payment-session`,
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: header,
      },
    )
    const session = await response.json()
    const result = await stripe?.redirectToCheckout({
      sessionId: session.id,
    })
    if (result?.error) {
      console.log(result.error)
    }
  } catch (error) {
    console.log(error)
  }
}
