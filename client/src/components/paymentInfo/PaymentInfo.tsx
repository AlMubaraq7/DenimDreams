import {
  Cancel,
  Container,
  Group,
  Header,
  Info,
  Modal,
} from "./PaymentInfo.styles"
import { CheckoutButton } from "../../pages/checkout/checkout.styles"
import { loadStripe } from "@stripe/stripe-js"
import { useAppSelector } from "../../app/hooks"

interface PropTypes {
  modalHidden: boolean
  setModal: () => void
}
const variants = {
  open: {
    scale: 1,
    opacity: 1,
  },
  closed: {
    opacity: 0,
    scale: 0,
    transition: {
      type: "spring",
      mass: 0.8,
      velocity: 1,
    },
  },
}

export const PaymentInfo = ({ modalHidden, setModal }: PropTypes) => {
  const email = useAppSelector((state) => state.user.user?.email)
  const cartItems = useAppSelector((state) => state.cart.cartItems)
  const createPaymentSession = async () => {
    try {
      const stripe = await loadStripe(
        import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY,
      )
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
  return (
    <Container variants={variants} animate={modalHidden ? "closed" : "open"}>
      <Modal>
        <Header>
          Use Card Information
          <Cancel onClick={setModal}>X</Cancel>
        </Header>
        <Group>
          <Info>
            <p>Card Number: &nbsp; 4242 &nbsp; 4242 &nbsp; 4242 &nbsp; 4242 </p>
            <p>Expiry: &nbsp; Any future date </p>
            <p>CVV: &nbsp; Any number</p>
          </Info>
          <CheckoutButton onClick={() => createPaymentSession()}>
            Checkout
          </CheckoutButton>
        </Group>
      </Modal>
    </Container>
  )
}

export default PaymentInfo
