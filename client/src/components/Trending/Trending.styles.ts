import styled from "styled-components"
import SecurePay from "../../assets/secure-payment.svg"
import Boxed from "../../assets/box.svg"
import Shipping from "../../assets/free-shipping.svg"

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 7rem;
  padding: 0 60px;
  gap: 8rem;
  @media only screen and (max-width: 480px) {
    margin-top: 5rem;
  }
`
export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  @media only screen and (max-width: 1024px) {
    gap: 1.75rem;
  }
  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`
export const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
  margin-bottom: 5rem;
  color: var(--primary);
  @media only screen and (max-width: 1024px) {
    font-size: 4.5rem;
  }
  @media only screen and (max-width: 680px) {
    font-size: 3.75rem;
    text-wrap: nowrap;
  }
  @media only screen and (max-width: 480px) {
    font-size: 3rem;
    text-wrap: nowrap;
  }
`
export const ExtrasBox = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  width: fit-content;
  gap: 2.5rem;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--gray);
  @media only screen and (max-width: 1100px) {
    gap: 1.75rem;
    padding: 1rem;
  }
  @media only screen and (max-width: 1024px) {
    gap: 1.25rem;
    padding: 1rem;
  }
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 700px) {
    width: 60%;
  }
  @media only screen and (max-width: 480px) {
    min-width: 230px;
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  @media only screen and (max-width: 900px) {
    text-align: center;
  }
`
export const SvgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Heading = styled.h3`
  font-family: "Nunito", sans-serif;
  @media only screen and (max-width: 1024px) {
    font-size: 1rem;
  }
`
export const Paragraph = styled.p`
  color: hsl(0, 0%, 25%);
  white-space: nowrap;
  @media only screen and (max-width: 1024px) {
    font-size: 0.9rem;
  }
`
export const ShippingSvg = styled.img.attrs((props) => ({
  src: Shipping,
}))`
  max-width: 70px;
  @media only screen and (max-width: 1100px) {
    max-width: 60px;
  }
  @media only screen and (max-width: 1024px) {
    max-width: 50px;
  }
`
export const SecureSvg = styled.img.attrs((props) => ({
  src: SecurePay,
}))`
  max-width: 70px;
  @media only screen and (max-width: 1100px) {
    max-width: 55px;
  }
  @media only screen and (max-width: 1024px) {
    max-width: 50px;
  }
`
export const BoxedSvg = styled.img.attrs((props) => ({
  src: Boxed,
}))`
  max-width: 70px;
  @media only screen and (max-width: 1100px) {
    max-width: 60px;
  }
  @media only screen and (max-width: 1024px) {
    max-width: 50px;
  }
`
export const TrendingContainer = styled.div`
  padding: 10px 50px;
  @media only screen and (max-width: 1024px) {
    padding: 0px;
  }
`
export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 400px;
  column-gap: 1rem;
  row-gap: 1.5rem;
  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 680px) {
    column-gap: 0.5rem;
  }
  @media only screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 2.5rem;
  }
`
export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 0.75rem;
  @media only screen and (max-width: 480px) {
    gap: 0.5rem;
  }
`

export const ItemImg = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  @media only screen and (max-width: 1024px) {
    width: 300px;
    background-size: contain;
    background-repeat: no-repeat;
  }
  @media only screen and (max-width: 680px) {
    width: 250px;
    background-size: contain;
    background-repeat: no-repeat;
  }
  @media only screen and (max-width: 680px) {
    width: 250px;
    background-size: contain;
    background-repeat: no-repeat;
  }
  @media only screen and (max-width: 600px) {
    width: 200px;
    background-size: contain;
    background-repeat: no-repeat;
  }
  @media only screen and (max-width: 480px) {
    width: 250px;
  }
`
export const ItemName = styled.span`
  font-size: 1.05rem;
  color: hsl(0, 0%, 30%);
  @media only screen and (max-width: 680px) {
    font-size: 0.95rem;
  }
`
export const ItemPrice = styled.span`
  color: black;
  font-size: 1.1rem;
  font-size: 700;
  @media only screen and (max-width: 680px) {
    font-size: 1rem;
  }
`
