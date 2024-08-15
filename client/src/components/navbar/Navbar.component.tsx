import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { circleVariants } from "../../animation"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import {
  toggleCartHidden,
  toggleCartHiddenWithPayload,
} from "../../redux/cart/cart.slice"
import { signOutStart } from "../../redux/users/user.slice"
import {
  Navigation,
  BoxLogo,
  ButtonLinkLogo,
  LinkBox,
  ButtonLink,
  SignInIcon,
  SignOutIcon,
  Button,
  CartContainer,
  CartIcon,
  Circle,
  Hamburger,
  Bar,
} from "./Navbar.styles"
import { MobileNav } from "../mobileNav/MobileNav"
import CartDropdown from "../cart-dropdown/cart-dropdown"

export const Navbar = () => {
  const [active, setActive] = useState(false)
  const user = useAppSelector((state) => state.user.user)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { cartItems, hidden } = useAppSelector((state) => state.cart)
  const setNavActive = (value: boolean) => {
    setActive(value)
  }
  // WHEN CART IS OPEN AND MOBILE NAV IS CLICKED
  const onMobileNavClick = () => {
    if (hidden) {
      setActive(!active)
    } else {
      dispatch(toggleCartHiddenWithPayload(true))
      setTimeout(() => {
        setActive(!active)
      }, 200)
    }
  }
  // WHEN CART IS OPEN AND SIGN IS CLICKED
  const onSignOut = () => {
    dispatch(signOutStart())
    !hidden && dispatch(toggleCartHidden())
  }
  return (
    <>
      <Navigation>
        <BoxLogo>
          <ButtonLinkLogo to="/">DenimDreams</ButtonLinkLogo>
        </BoxLogo>
        <LinkBox>
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
        </LinkBox>
        <Hamburger $active={active} onClick={() => onMobileNavClick()}>
          <Bar />
          <Bar />
          <Bar />
        </Hamburger>
      </Navigation>

      {/* MOBILE NAVIGATION */}
      <MobileNav
        active={active}
        onSignOut={onSignOut}
        setNavActive={setNavActive}
      />
      <CartDropdown />
    </>
  )
}

export default Navbar
