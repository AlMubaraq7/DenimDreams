import styled from "styled-components"
export const Container = styled.div`
  display: grid;
  padding: 20px 60px;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  grid-auto-rows: 500px;
  row-gap: 1.5em;
  column-gap: 1.5rem;
`
export const Boxes = styled.div<{ $imageUrl?: string }>`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
  transition: opacity 150ms linear;
  position: relative;
  background-image: url(${(props) => `${props.$imageUrl}`});
  cursor: pointer;
  &:hover {
    opacity: 0.85;
  }
`
export const TopTitle = styled.span`
  font-family: "Josefin Sans", sans-serif;
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  font-variant: small-caps;
  font-weight: 400;
  position: absolute;
  background-color: white;
  color: var(--primary);
  top: 0;
  right: 0;
`
export const BottomTitle = styled(TopTitle)`
  top: unset;
  bottom: 0;
`
