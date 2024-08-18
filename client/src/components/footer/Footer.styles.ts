import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.div`
  width: inherit;
  margin-top: 5rem;
  background-color: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  padding: 4rem 6rem;
  font-family: "Josefin Sans", sans-serif;
  white-space: nowrap;
  @media only screen and (max-width: 1024px) {
    padding: 4rem 3rem;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`
export const LinkBox = styled.div`
  flex: 1;
  display: flex;
  gap: 0.75rem;
`
export const ButtonLink = styled(Link)`
  font-size: 1.25rem;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 0.5px;
  color: white;
  font-weight: 300;

  @media only screen and (max-width: 1024px) {
    font-size: 0.9rem;
  }
`
export const SignOut = styled.span`
  font-size: 1.25rem;
  cursor: pointer;
  letter-spacing: 0.5px;
  color: white;
  font-weight: 300;
  @media only screen and (max-width: 1024px) {
    font-size: 0.9rem;
  }
`
export const LogoBox = styled.div`
  flex: 2;
  text-align: center;
`
export const LogoLink = styled(ButtonLink)`
  font-size: 2.25rem;
  font-weight: 500;
  @media only screen and (max-width: 1024px) {
    font-size: 1.8rem;
  }
`
export const CopyRightBox = styled.div`
  flex: 1;
`
export const CopyRightText = styled.span`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 300;
  @media only screen and (max-width: 1024px) {
    font-size: 0.8rem;
  }
`
