import { useRef } from "react"
import {
  MobileButtonLink,
  MobileLinkBox,
  MobileNavContainer,
  MobileSpanLink,
} from "./MobileNav.styles"
import { useNavigate } from "react-router-dom"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { toggleCartHiddenWithPayload } from "../../redux/cart/cart.slice"
import { useClickOutside } from "../../hooks"
import { AnimatePresence } from "framer-motion"
interface MobileNavProps {
  active: boolean
  setNavActive: (value: boolean) => void
  onSignOut: () => void
}

export const MobileNav = ({
  active,
  setNavActive,
  onSignOut,
}: MobileNavProps) => {
  const user = useAppSelector((state) => state.user.user)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const navRef = useRef<HTMLDivElement>(null)

  // WHEN CART IS CLICKED AND NAV IS OPEN
  const onCartClick = () => {
    setNavActive(false)
    setTimeout(() => {
      dispatch(toggleCartHiddenWithPayload(false))
    }, 800)
  }

  // CLOSE NAV ON OUTSIDE CLICK
  useClickOutside(navRef, setNavActive, false)

  const mobileNavAnimation = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
      // display: "none",
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
  return (
    <AnimatePresence>
      {active && (
        <MobileNavContainer
          $active={active}
          variants={mobileNavAnimation}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <MobileLinkBox
            ref={navRef}
            variants={mobileLinkBoxAnimation}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <MobileButtonLink variants={linkAnimation} to="/">
              <span onClick={() => setNavActive(false)}>Home</span>
            </MobileButtonLink>
            <MobileButtonLink variants={linkAnimation} to="/collections">
              <span onClick={() => setNavActive(false)}>Collections</span>
            </MobileButtonLink>
            {!user ? (
              <MobileButtonLink variants={linkAnimation} to="/sign-in">
                <span onClick={() => setNavActive(false)}>Sign In</span>
              </MobileButtonLink>
            ) : (
              <MobileSpanLink variants={linkAnimation} onClick={onSignOut}>
                Sign out
              </MobileSpanLink>
            )}
            <MobileSpanLink
              variants={linkAnimation}
              onClick={() => (user ? onCartClick() : navigate("/sign-in"))}
            >
              Cart
            </MobileSpanLink>
            <MobileButtonLink variants={linkAnimation} to="/checkout">
              <span onClick={() => setNavActive(false)}>Checkout</span>
            </MobileButtonLink>
          </MobileLinkBox>
        </MobileNavContainer>
      )}
    </AnimatePresence>
  )
}
