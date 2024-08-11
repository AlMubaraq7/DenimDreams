import {
  Navigation,
  LinkBox,
  BoxLogo,
  Button,
  ButtonLink,
  ButtonLinkLogo,
  CartIcon,
  SignInIcon,
  Circle,
  SignOutIcon,
  CartContainer,
  Hamburger,
  Bar,
  MobileNavContainer,
  MobileLinkBox,
  MobileButtonLink,
  MobileSpanLink,
} from "./Navbar.styles"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { toggleCartHidden } from "../../redux/cart/cart.slice"
import CartDropdown from "../cart-dropdown/cart-dropdown"
import { signOutStart } from "../../redux/users/user.slice"
import { useNavigate } from "react-router-dom"
import { circleVariants } from "../../animation"
import { useState } from "react"

const Navbar = () => {
  const [active, setActive] = useState(false)
  const user = useAppSelector((state) => state.user.user)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { cartItems, hidden } = useAppSelector((state) => state.cart)
  const mobileNavAnimation = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
      transition: {
        delay: 0.7,
      },
    },
  }
  const mobileLinkBoxAnimation = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.4,
      },
    },
    hidden: {
      opacity: 0,
      scale: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        duration: 0.4,
      },
    },
  }
  const linkAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }
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
        <Hamburger $active={active} onClick={() => setActive(!active)}>
          <Bar />
          <Bar />
          <Bar />
        </Hamburger>
      </Navigation>
      <MobileNavContainer
        variants={mobileNavAnimation}
        animate={active ? "visible" : "hidden"}
      >
        <MobileLinkBox
          variants={mobileLinkBoxAnimation}
          animate={active ? "visible" : "hidden"}
        >
          <MobileButtonLink variants={linkAnimation} to="/">
            Home
          </MobileButtonLink>
          <MobileButtonLink variants={linkAnimation} to="/collections">
            Collections
          </MobileButtonLink>
          {!user ? (
            <MobileButtonLink variants={linkAnimation} to="/sign-in">
              Sign In
            </MobileButtonLink>
          ) : (
            <MobileSpanLink variants={linkAnimation} onClick={onSignOut}>
              Sign out
            </MobileSpanLink>
          )}
          <MobileSpanLink
            variants={linkAnimation}
            onClick={() =>
              user ? dispatch(toggleCartHidden()) : navigate("/sign-in")
            }
          >
            Cart
          </MobileSpanLink>
        </MobileLinkBox>
      </MobileNavContainer>
      {/* <CartDropdown /> */}
    </>
  )
}

export default Navbar
