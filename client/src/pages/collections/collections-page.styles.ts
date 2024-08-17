import styled from "styled-components"
import { motion } from "framer-motion"
export const SubCategoryNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
`
export const SubCategoryLink = styled.span<{ $active?: boolean }>`
  font-family: "Josefin Sans", sans-serif;
  text-decoration: none;
  color: black;
  padding: 1.5rem 2rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: black;
  cursor: pointer;
`
export const ItemContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 400px;
  column-gap: 1rem;
  row-gap: 3rem;
  padding: 10px 60px;
  padding-bottom: 50px;
  @media only screen and (max-width: 680px) {
    grid-template-columns: repeat(2, minmax(200px, 250px));
  }
  @media only screen and (max-width: 550px) {
    grid-template-columns: 250px;
    row-gap: 0.5rem;
    column-gap: 0rem;
    margin-left: 4%;
  }
  @media only screen and (max-width: 400px) {
    grid-template-columns: 250px;
    row-gap: 0.5rem;
    column-gap: 0rem;
    margin-left: -5%;
  }
`
export const AddToCart = styled(motion.button)`
  text-decoration: none;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1rem;
  position: absolute;
  bottom: 7rem;
  padding: 0.75rem 3rem;
  background-color: var(--primary);
  color: white;
  border: none;
  cursor: pointer;
  display: none;
  @media only screen and (max-width: 1024px) {
    display: block;
  }
`
export const ItemImg = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: all 200ms linear;
  @media only screen and (max-width: 1024px) {
    background-size: contain;
    background-repeat: no-repeat;
  }
`
export const ItemBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 0.75rem;
  transition: all 150ms linear;
  position: relative;
  &:hover {
    & ${ItemImg} {
      opacity: 0.85;
    }
    & ${AddToCart} {
      display: flex;
      opacity: 0.95;
    }
  }
  @media only screen and (max-width: 1024px) {
    &:hover {
      & ${ItemImg} {
        opacity: 1;
      }
      & ${AddToCart} {
        display: flex;
        opacity: 1;
      }
    }
  }
  @media only screen and (max-width: 680px) {
  }
`
export const ItemName = styled.span`
  font-size: 1.05rem;
  color: hsl(0, 0%, 30%);
`
export const ItemPrice = styled.span`
  color: black;
  font-size: 1.1rem;
  font-size: 700;
`
