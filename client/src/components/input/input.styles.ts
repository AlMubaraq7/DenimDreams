import styled from "styled-components"

export const StyledInput = styled.input`
  font-family: "Nunito", sans-serif;
  display: block;
  width: 120%;
  border: none;
  padding: 1rem;
  background-color: hsl(0, 1%, 95%);
  color: var(--primary);
  outline: none;
  font-size: 1rem;
  &:focus-visible,
  &:focus {
    outline: 1px inset var(--primary);
  }
`
