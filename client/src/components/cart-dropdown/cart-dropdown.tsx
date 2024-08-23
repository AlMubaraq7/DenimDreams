import {
  CartItem,
  CartItemDetails,
  CartItemImg,
  CartItemImgContainer,
  CartItemName,
  CartItemPrice,
  CartItemsContainer,
  CartEmptyMessage,
  CheckoutBtn,
  Close,
  Container,
} from "./cart-dropdown.styles"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { toggleCartHidden } from "../../redux/cart/cart.slice"
import { ClothingItem } from "../../utils"
import { AnimatePresence } from "framer-motion"

const variants = {
  open: {
    x: "0%",
    opacity: 1,
  },
  closed: {
    x: "150%",
    opacity: 0,
    transition: {
      type: "spring",
      mass: 0.8,
      velocity: 1,
    },
  },
}

const CartDropdown = () => {
  const dispatch = useAppDispatch()
  const cartHidden = useAppSelector((state) => state.cart.hidden)
  const cartItems = useAppSelector((state) => state.cart.cartItems)
  return (
    <AnimatePresence>
      {!cartHidden && (
        <Container
          $hidden={cartHidden}
          variants={variants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          {cartItems.length === 0 ? (
            <CartEmptyMessage>Your cart is empty</CartEmptyMessage>
          ) : (
            <>
              <CartItemsContainer>
                {cartItems.map((item: ClothingItem) => (
                  <CartItem key={item.id}>
                    <CartItemImgContainer>
                      <CartItemImg src={item.imageUrl} />
                    </CartItemImgContainer>
                    <CartItemDetails>
                      <CartItemName>{item.name}</CartItemName>
                      <CartItemPrice>
                        {item.quantity} x ${item.price}
                      </CartItemPrice>
                    </CartItemDetails>
                  </CartItem>
                ))}
              </CartItemsContainer>
              <CheckoutBtn
                to="/checkout"
                onClick={() => dispatch(toggleCartHidden())}
              >
                Go to checkout
              </CheckoutBtn>
            </>
          )}
          <Close onClick={() => dispatch(toggleCartHidden())}>X</Close>
        </Container>
      )}
    </AnimatePresence>
  )
}

export default CartDropdown
