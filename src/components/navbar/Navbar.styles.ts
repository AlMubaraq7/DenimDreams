import styled from "styled-components"
import Cart from "../../assets/cart-icon.svg"
import SignIn from "../../assets/sign-in-icon.svg"
import SignOut from "../../assets/sign-out-icon.svg"
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
  padding: 2rem 1rem;
  align-items: center;
  flex: 1 1;
  display: flex;
  gap: 2.25rem;
  justify-content: flex-end;
`
export const BoxLogo = styled(Box)`
  justify-content: flex-start;
`
export const ButtonLink = styled(Link)`
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.55rem;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 0.5px;
  color: black;
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
  letter-spacing: 0px;
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
export const SignOutIcon = styled.img.attrs((props) => ({
  src: SignOut,
}))`
  width: 20px;
  cursor: pointer;
  margin-bottom: 4px;
`
export const Circle = styled.div`
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
