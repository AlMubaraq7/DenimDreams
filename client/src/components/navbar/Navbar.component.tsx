import {
  Navigation,
  Container,
  Box,
  BoxLogo,
  Button,
  ButtonLink,
  ButtonLinkLogo,
  CartIcon,
  SignInIcon,
  Circle,
  SignOutIcon,
  CartContainer,
} from "./Navbar.styles"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { toggleCartHidden } from "../../redux/cart/cart.slice"
import CartDropdown from "../cart-dropdown/cart-dropdown"
import { signOutStart } from "../../redux/users/user.slice"
import { useNavigate } from "react-router-dom"
import { circleVariants } from "../../animation"

const Navbar = () => {
  const user = useAppSelector((state) => state.user.user)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { cartItems, hidden } = useAppSelector((state) => state.cart)
  const onSignOut = () => {
    dispatch(signOutStart())
    !hidden && dispatch(toggleCartHidden())
  }
  return (
    <>
      <Navigation>
        <Container>
          <BoxLogo>
            <ButtonLinkLogo to="/">DenimDreams</ButtonLinkLogo>
          </BoxLogo>
          <Box>
            <ButtonLink to="/">Home</ButtonLink>
            <ButtonLink to="/collections">Collections</ButtonLink>
            {!user ? (
              <ButtonLink to="/sign-in">
                <SignInIcon />
              </ButtonLink>
            ) : (
              <SignOutIcon onClick={onSignOut} />
            )}
            <Button
              onClick={() =>
                user ? dispatch(toggleCartHidden()) : navigate("/sign-in")
              }
            >
              <CartContainer>
                <CartIcon />
                <Circle
                  variants={circleVariants}
                  animate={user && cartItems.length !== 0 ? "show" : "hide"}
                />
              </CartContainer>
            </Button>
          </Box>
        </Container>
      </Navigation>
      <CartDropdown />
    </>
  )
}

export default Navbar
