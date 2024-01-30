import {
  Navigation,
  Container,
  Box,
  BoxLogo,
  ButtonLink,
  ButtonLinkLogo,
  CartIcon,
  SignInIcon,
} from "./Navbar.styles"

const Navbar = () => {
  return (
    <Navigation>
      <Container>
        <BoxLogo>
          <ButtonLinkLogo to="/">M&M</ButtonLinkLogo>
        </BoxLogo>
        <Box>
          <ButtonLink to="/">Home</ButtonLink>
          <ButtonLink to="/collections">Collections</ButtonLink>
          <ButtonLink to="/trending">Trending</ButtonLink>
          <ButtonLink to="/signIn">
            <SignInIcon />
          </ButtonLink>
          <ButtonLink to="/checkout">
            <CartIcon />
          </ButtonLink>
        </Box>
      </Container>
    </Navigation>
  )
}

export default Navbar
