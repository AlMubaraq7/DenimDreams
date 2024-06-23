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
  Container,
} from "./cart-dropdown.styles"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { toggleCartHidden } from "../../redux/cart/cart.slice"

const CartDropdown = () => {
  const dispatch = useAppDispatch()
  const cartHidden = useAppSelector((state) => state.cart.hidden)
  const cartItems = useAppSelector((state) => state.cart.cartItems)
  return cartHidden ? (
    <Container>
      {cartItems.length === 0 ? (
        <CartEmptyMessage>Your cart is empty</CartEmptyMessage>
      ) : (
        <CartItemsContainer>
          {cartItems.map((item) => (
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
      )}
      <CheckoutBtn to="/checkout" onClick={() => dispatch(toggleCartHidden())}>
        Go to checkout
      </CheckoutBtn>
    </Container>
  ) : (
    ""
  )
}

export default CartDropdown
