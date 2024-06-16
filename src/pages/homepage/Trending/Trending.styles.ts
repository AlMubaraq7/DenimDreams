import styled from "styled-components"
import Shipping from "../../../assets/free-shipping.svg"
import SecurePay from "../../../assets/secure-payment.svg"
import Boxed from "../../../assets/box.svg"

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 7rem;
  padding: 0 60px;
  gap: 8rem;
`
export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
  margin-bottom: 5rem;
  color: var(--primary);
`
export const ExtrasBox = styled.div`
  padding: 1rem 2.5rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--gray);
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`
export const SvgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Heading = styled.h3`
  font-family: "Nunito", sans-serif;
`
export const Paragraph = styled.p`
  color: hsl(0, 0%, 25%);
  white-space: nowrap;
`
export const ShippingSvg = styled.img.attrs((props) => ({
  src: Shipping,
}))`
  width: 70px;
`
export const SecureSvg = styled.img.attrs((props) => ({
  src: SecurePay,
}))`
  width: 70px;
`
export const BoxedSvg = styled.img.attrs((props) => ({
  src: Boxed,
}))`
  width: 70px;
`
export const TrendingContainer = styled.div`
  padding: 10px 50px;
`
export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 400px;
  column-gap: 1rem;
  row-gap: 1.5rem;
`
export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 0.75rem;
`

export const ItemImg = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  cursor: pointer;
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
