import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import styled from "styled-components"
export const Container = styled(motion.div)`
  width: 250px;
  max-height: 300px;
  border: 1px solid var(--primary);
  position: fixed;
  right: 1.5rem;
  z-index: 10;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 1.25rem 1rem;
  overflow: scroll;
  @media only screen and (max-width: 480px) {
    padding: 1rem 0.75rem;
  }
`
export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  height: 75%;
  overflow: scroll;
`
export const CartItem = styled(motion.div)`
  display: flex;
  gap: 0.5rem;
`
export const CartItemImgContainer = styled.div`
  width: 30%;
`
export const CartItemImg = styled.img`
  object-fit: contain;
  aspect-ratio: 1 / 1;
`
export const CartItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.35rem;
`
export const CartItemName = styled.span`
  font-size: 0.85rem;
`
export const CartItemPrice = styled.span`
  font-size: 0.85rem;
  font-weight: 700;
`
export const CartEmptyMessage = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  margin-top: 1rem;
  margin-left: 2rem;
`

export const CheckoutBtn = styled(Link)`
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.2rem;
  margin-top: 1rem;
  margin-left: 2rem;
  padding: 0.75rem 1.5rem;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 0.5px;
  color: white;
  background-color: var(--primary);
  @media only screen and (max-width: 480px) {
  }
`
export const Close = styled.span`
  position: fixed;
  top: 0.75rem;
  right: 1rem;
  font-size: 1.25rem;
  cursor: pointer;
`
