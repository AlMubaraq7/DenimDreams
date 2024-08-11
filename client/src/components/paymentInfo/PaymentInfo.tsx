import {
  Cancel,
  Container,
  Group,
  Header,
  Info,
  Modal,
} from "./PaymentInfo.styles"
import { CheckoutButton } from "../../pages/checkout/checkout.styles"
import { useAppSelector } from "../../app/hooks"
import { createPaymentSession } from "../../api/payment"
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
  const email = useAppSelector((state) => state.user.user?.email) as string
  const cartItems = useAppSelector((state) => state.cart.cartItems)
  return (
    <Container variants={variants} animate={modalHidden ? "closed" : "open"}>
      <Modal>
        <Header>
          <strong>Use Card Information</strong>
          <Cancel onClick={setModal}>X</Cancel>
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
