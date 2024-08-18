import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { toggleCartHidden } from "../../redux/cart/cart.slice"
import { signOutStart } from "../../redux/users/user.slice"
import {
  ButtonLink,
  Container,
  CopyRightBox,
  CopyRightText,
  LinkBox,
  LogoBox,
  LogoLink,
  SignOut,
} from "./Footer.styles"

export const Footer = () => {
  const { user, isAuthenticating } = useAppSelector((state) => state.user)
  const { isFetching } = useAppSelector((state) => state.items)
  const dispatch = useAppDispatch()
  const { hidden } = useAppSelector((state) => state.cart)
  const onSignOut = () => {
    dispatch(signOutStart())
    !hidden && dispatch(toggleCartHidden())
  }
  return (
    <>
      {isAuthenticating || isFetching ? null : (
        <Container>
          <LinkBox>
            <ButtonLink to="/">Home</ButtonLink>
            <ButtonLink to="/collections">Collections</ButtonLink>

            {!user ? (
              <ButtonLink to="/sign-in">Sign In</ButtonLink>
            ) : (
              <SignOut onClick={onSignOut}>Sign Out</SignOut>
            )}
          </LinkBox>
          <LogoBox>
            <LogoLink to="/">DenimDreams</LogoLink>
          </LogoBox>
          <CopyRightBox>
            <CopyRightText>
              Copyright &#169; 2024, Al-Mubaraq Momoh
            </CopyRightText>
          </CopyRightBox>
        </Container>
      )}
    </>
  )
}
