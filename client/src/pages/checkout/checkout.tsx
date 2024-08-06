import {
  Container,
  Header,
  Product,
  Quantity,
  Price,
  ItemsContainer,
  TotalContainer,
  ButtonContainer,
  AmountBox,
  ButtonLink,
  SubTotalBox,
  TextBold,
  TextNormal,
  TotalNormal,
  TotalBox,
  Cancelled,
  CartEmptyMessage,
  CheckoutButton,
} from "./checkout.styles"
import CheckoutItem from "../../components/checkout-item/checkout.item"
import { useAppSelector } from "../../app/hooks"
import { routeVariants } from "../../animation"
import { useState } from "react"
import { ClothingItem } from "../../utils"
import PaymentInfo from "../../components/paymentInfo/PaymentInfo"

const Checkout = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems)
  const total = cartItems.reduce(
    (accumulator: number, cartItem: ClothingItem) =>
      accumulator + cartItem.quantity * cartItem.price,
    0,
  )
  const [modalHidden, setModalHidden] = useState<boolean>(true)
  const setModal = () => {
    setModalHidden(!modalHidden)
  }

  return (
    <>
      <Container
        variants={routeVariants}
        initial="initial"
        animate="final"
        exit="exit"
        transition={routeVariants.transition}
      >
        {cartItems.length === 0 ? (
          <CartEmptyMessage>Your cart is currently empty</CartEmptyMessage>
        ) : (
          <>
            <Header>
              <Product>
                <span>Product</span>
              </Product>
              <Quantity>
                <span>Quantity</span>
              </Quantity>
              <Price>
                <span>Price</span>
              </Price>
            </Header>
            <ItemsContainer>
              {cartItems.map((item: ClothingItem) => (
                <CheckoutItem key={item.id} cartItem={item} />
              ))}
            </ItemsContainer>
            <TotalContainer>
              <ButtonContainer>
                <ButtonLink to="/collections">Continue Shopping</ButtonLink>
                <CheckoutButton onClick={setModal}>Checkout</CheckoutButton>
              </ButtonContainer>
              <AmountBox>
                <SubTotalBox>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <TextBold>Subtotal:</TextBold>
                    <TextNormal>${total}</TextNormal>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <TextBold>Shipping:</TextBold>
                    &nbsp;
                    <Cancelled>$3.99</Cancelled>
                    <TextNormal>$0</TextNormal>
                  </div>
                </SubTotalBox>
                <TotalBox>
                  <TextBold>Total:</TextBold>
                  <TotalNormal>${total}</TotalNormal>
                </TotalBox>
              </AmountBox>
            </TotalContainer>
          </>
        )}
        <PaymentInfo modalHidden={modalHidden} setModal={setModal} />
      </Container>
    </>
  )
}

export default Checkout
