import styled from "styled-components"
import Cart from "../../assets/svg/cart-icon.svg"
import SignIn from "../../assets/svg/sign-in-icon.svg"
import { Link } from "react-router-dom"

export const Navigation = styled.nav`
  width: 100%;
`
export const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const Box = styled.div`
  padding: 1.5rem 0.75rem;
  align-items: center;
  flex: 1 1;
  display: flex;
  gap: 2rem;
  justify-content: flex-end;
`
export const BoxLogo = styled(Box)`
  justify-content: flex-start;
`
export const ButtonLink = styled(Link)`
  font-family: "Josefin Sans", sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.5px;
  color: black;
`
export const ButtonLinkLogo = styled(ButtonLink)`
  font-size: 2.25rem;
  font-variant: small-caps;
  font-weight: bold;
  color: var(--primary);
`

export const CartIcon = styled.img.attrs((props) => ({
  src: Cart,
}))`
  width: 25px;
`
export const SignInIcon = styled.img.attrs((props) => ({
  src: SignIn,
}))`
  width: 20px;
`
