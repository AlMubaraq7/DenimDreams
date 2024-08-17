import styled from "styled-components"
export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 90px;
  border-bottom: 1px solid var(--gray);
  align-items: center;
  padding: 1rem 0;
  position: relative;
`
export const Product = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`
export const ImageContainer = styled.div`
  width: 18%;
  padding-right: 1.5rem;
  @media only screen and (max-width: 768px) {
    display: none;
    width: 0;
  }
`

export const Quantity = styled.div`
  width: 25%;
  padding-left: 2.25rem;
`
export const ItemQuantity = styled.div`
  width: fit-content;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: 1px solid var(--gray);
  @media only screen and (max-width: 680px) {
    padding: 0.5rem 0.75rem;
    font-size: 0.85rem;
  }
`
export const Arrow = styled.div`
  cursor: pointer;
  font-weight: bold;
  font-size: 1.25rem;
  @media only screen and (max-width: 680px) {
    font-size: 1rem;
  }
`

export const Price = styled.div`
  width: 25%;
  padding-left: 4rem;
  @media only screen and (max-width: 680px) {
    font-size: 0.85rem;
  }
`
export const Remove = styled.div`
  position: absolute;
  right: 2.5rem;
  cursor: pointer;
  @media only screen and (max-width: 680px) {
    display: none;
  }
`
