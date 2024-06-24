import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import styled from "styled-components"
export const Container = styled(motion.div)`
  width: 250px;
  height: 350px;
  border: 1px solid var(--primary);
  position: absolute;
  right: 1.5rem;
  z-index: 10;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 1rem 0.5rem;
`
export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  flex-basis: 100%;
`
export const CartItem = styled.div`
  display: flex;
  gap: 0.25rem;
`
export const CartItemImgContainer = styled.div`
  width: 35%;
`
export const CartItemImg = styled.img`
  object-fit: contain;
  aspect-ratio: 1 / 1;
`
export const CartItemDetails = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
`
export const CartItemName = styled.span`
  font-size: 0.9rem;
`
export const CartItemPrice = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
`
export const CartEmptyMessage = styled.span`
  color: darkgray;
  font-size: 1.25rem;
  margin: 7.5rem auto;
`

export const CheckoutBtn = styled(Link)`
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.3rem;
  padding: 0.75rem 1.5rem;
  margin-top: auto;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 0.5px;
  color: white;
  background-color: var(--primary);
`
