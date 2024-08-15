import styled from "styled-components"
import Cart from "../../assets/cart-icon.svg"
import SignIn from "../../assets/sign-in-icon.svg"
import SignOut from "../../assets/sign-out-icon.svg"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export const Navigation = styled.nav`
  width: 100%;
  margin: 0 auto;
  width: 90%;
  display: flex;
  justify-content: space-around;
  z-index: 15;
  align-items: center;
  @media only screen and (max-width: 480px) {
    justify-content: space-between;
  }
`
export const LinkBox = styled.div`
  padding: 2rem 1rem;
  align-items: center;
  flex: 1 0;
  display: flex;
  gap: 2.25rem;
  justify-content: flex-end;
  transition: all 150ms linear;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`
export const BoxLogo = styled.div`
  justify-content: flex-start;
  padding: 2rem 1rem;
  align-items: center;
  flex: 1 0;
  display: flex;
  gap: 2.25rem;
`
export const ButtonLink = styled(Link)`
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.55rem;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 0.5px;
  color: black;
  @media only screen and (max-width: 1024px) {
    font-size: 1.25rem;
  }
`

export const Button = styled.button`
  font-size: 1.55rem;
  cursor: pointer;
  color: black;
  background-color: white;
  border: none;
`
export const ButtonLinkLogo = styled(ButtonLink)`
  font-size: 2.25rem;
  color: var(--primary);
  font-weight: bold;

  @media only screen and (max-width: 1024px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 1.8rem;
  }
`

export const Bar = styled.div`
  height: 3px;
  width: 35px;
  background-color: black;
  transition: all 150ms linear;
`

export const Hamburger = styled.div<{ $active: boolean }>`
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-right: 1.25rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
    & ${Bar}:nth-child(2) {
      opacity: ${(props) => (props.$active ? "0" : "1")};
    }
    & ${Bar}:nth-child(1) {
      transform: ${(props) =>
        props.$active
          ? "translateY(11px) rotate(45deg)"
          : "translateY(0deg) rotate(0deg)"};
    }
    & ${Bar}:nth-child(3) {
      transform: ${(props) =>
        props.$active
          ? "translateY(-11px) rotate(-45deg)"
          : "translateY(0deg) rotate(0deg)"};
    }
  }
`
export const CartIcon = styled.img.attrs((props) => ({
  src: Cart,
}))`
  max-width: 25px;
  @media only screen and (max-width: 1024px) {
    max-width: 22px;
  }
`
export const SignInIcon = styled.img.attrs((props) => ({
  src: SignIn,
}))`
  width: 20px;
  cursor: pointer;
  @media only screen and (max-width: 1024px) {
    width: 18px;
  }
`
export const SignOutIcon = styled.img.attrs((props) => ({
  src: SignOut,
}))`
  width: 20px;
  cursor: pointer;
  margin-bottom: 4px;
  width: 18px;
`
export const Circle = styled(motion.div)`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: -0.3rem;
  background-color: var(--primary);
`
export const CartContainer = styled.div`
  position: relative;
`
