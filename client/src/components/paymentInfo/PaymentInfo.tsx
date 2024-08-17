import {
  Close,
  Container,
  Group,
  Header,
  Info,
  Modal,
} from "./PaymentInfo.styles"
import { CheckoutButton } from "../../pages/checkout/checkout.styles"
import { useAppSelector } from "../../app/hooks"
import { createPaymentSession } from "../../api/payment"
import { useEffect, useRef } from "react"
import { useClickOutside } from "../../hooks"
interface PropTypes {
  modalHidden: boolean
  setModal: (value: boolean) => void
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
  const email = useAppSelector((state) => state.user.user?.email) as string
  const cartItems = useAppSelector((state) => state.cart.cartItems)
  const ref = useRef<HTMLDivElement>(null)

  // CLOSE PAYMENTINFO ON OUTSIDE CLICK
  useClickOutside(ref, setModal, true)
  return (
    <Container variants={variants} animate={modalHidden ? "closed" : "open"}>
      <Modal ref={ref}>
        <Header>
          <strong>Use Card Information</strong>
          <Close onClick={() => setModal(true)}>X</Close>
        </Header>
        <Group>
          <Info>
            <p>
              Card Number:{" "}
              <strong> &nbsp; 4242 &nbsp; 4242 &nbsp; 4242 &nbsp; 4242 </strong>
            </p>
            <p>
              Expiry: <strong>&nbsp; Any future date</strong>{" "}
            </p>
            <p>
              CVV: <strong>&nbsp; Any number</strong>
            </p>
          </Info>
          <CheckoutButton
            onClick={() => createPaymentSession(cartItems, email)}
          >
            Checkout
          </CheckoutButton>
        </Group>
      </Modal>
    </Container>
  )
}

export default PaymentInfo
