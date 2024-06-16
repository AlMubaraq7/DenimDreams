import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.button`
  background: none;
  border: 2px solid var(--primary);
  color: var(--primary);
  padding: 0.75rem 1.75rem;
  cursor: pointer;
  transition: all 150ms ease-out;
  &:hover {
    background-color: var(--primary);
    color: white;
  }
`

export const ButtonLink = styled(Link)`
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.15rem;
  text-decoration: none;
  color: inherit;
`
