import { useEffect, useRef } from "react"
import {
  MobileButtonLink,
  MobileLinkBox,
  MobileNavContainer,
  MobileSpanLink,
} from "./MobileNav.styles"
import { useNavigate } from "react-router-dom"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { toggleCartHiddenWithPayload } from "../../redux/cart/cart.slice"
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
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setNavActive(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [navRef])
  const mobileNavAnimation = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
      display: "none",
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
    <MobileNavContainer
      variants={mobileNavAnimation}
      animate={active ? "visible" : "hidden"}
    >
      <MobileLinkBox
        ref={navRef}
        variants={mobileLinkBoxAnimation}
        animate={active ? "visible" : "hidden"}
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
      </MobileLinkBox>
    </MobileNavContainer>
  )
}
