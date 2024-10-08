import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import styled from "styled-components"
export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: -2rem auto;
  margin-bottom: 0;
  overflow: scroll;
  padding: 1rem 1.5rem;
  position: relative;
  overflow-x: hidden;
  height: 100vh;
`

export const Header = styled.div`
  width: 100%;
  font-weight: bold;
  padding: 1rem 0;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--gray);
`
export const ItemsContainer = styled.div`
  height: 300px;
  overflow: scroll;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

export const Product = styled.div`
  width: 42%;
  @media only screen and (max-width: 480px) {
    font-size: 0.85rem;
    width: 35%;
  }
`
export const Quantity = styled.div`
  width: 27%;
  @media only screen and (max-width: 480px) {
    font-size: 0.85rem;
    width: 32%;
    text-align: center;
  }
`
export const Price = styled.div`
  width: 27%;
  @media only screen and (max-width: 480px) {
    font-size: 0.85rem;
    width: 32%;
    text-align: center;
  }
`
export const Total = styled.span`
  align-self: flex-end;
  font-size: 1.5rem;
  font-weight: bold;
`
export const TotalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 480px) {
    font-size: 0.85rem;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-basis: 25%;
`
export const AmountBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-basis: 25%;
`
export const SubTotalBox = styled.div`
  padding: 0.75rem;
  border-bottom: 1px solid var(--gray);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const TotalBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
`
export const TextBold = styled.span`
  font-weight: bold;
`
export const TextNormal = styled.span``
export const TotalNormal = styled(TextNormal)`
  font-size: 1.3rem;
  media only screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 1.15rem;
  }
`
export const ButtonLink = styled(Link)`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid var(--gray);
  font-weight: bold;
  text-decoration: none;
  color: black;
  text-align: center;
`
export const CheckoutButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 1rem;
  color: white;
  background-color: var(--primary);
  font-family: "Nunito", sans-serif;
  border: none;
  cursor: pointer;
`
export const Cancelled = styled.span`
  color: var(--gray);
  text-decoration: line-through;
  font-weight: normal;
  margin-right: 0.95rem;
  font-size: 1rem;
`
export const CartEmptyMessage = styled.span`
  font-size: 2rem;
  margin-top: 13rem;
  @media only screen and (max-width: 500px) {
    font-size: 1.25rem;
  }
`
