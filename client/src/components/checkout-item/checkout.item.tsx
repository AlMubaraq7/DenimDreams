import { ClothingItem } from "../../utils"
import {
  Arrow,
  Container,
  ImageContainer,
  ItemQuantity,
  Product,
  Quantity,
  Price,
  Remove,
} from "./checkout.item.styles"
import { useAppDispatch } from "../../app/hooks"
import {
  clearItemFromCart,
  addItemToCart,
  reduceItemQuantity,
} from "../../redux/cart/cart.slice"
interface Props {
  cartItem: ClothingItem
}
const CheckoutItem = ({ cartItem }: Props) => {
  const dispatch = useAppDispatch()
  return (
    <Container>
      <Product>
        <ImageContainer>
          <img
            src={cartItem.imageUrl}
            alt={cartItem.name}
            style={{
              objectFit: "contain",
            }}
          />
        </ImageContainer>
        <span>{cartItem.name}</span>
      </Product>
      <Quantity>
        <ItemQuantity>
          <Arrow onClick={() => dispatch(reduceItemQuantity(cartItem))}>
            -
          </Arrow>
          <span>{cartItem.quantity}</span>
          <Arrow onClick={() => dispatch(addItemToCart(cartItem))}>+</Arrow>
        </ItemQuantity>
      </Quantity>
      <Price>
        <span>${cartItem.price}</span>
      </Price>
      <Remove>
        <span onClick={() => dispatch(clearItemFromCart(cartItem))}>
          &#10005;
        </span>
      </Remove>
    </Container>
  )
}

export default CheckoutItem
