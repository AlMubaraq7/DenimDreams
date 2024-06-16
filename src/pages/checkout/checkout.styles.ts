import { Link } from "react-router-dom"
import styled from "styled-components"
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: -1rem auto;
  margin-bottom: 0;
  overflow: scroll;
  padding: 1rem;
  position: relative;
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
  height: 265px;
  overflow: scroll;
`

export const Product = styled.div`
  width: 40%;
`
export const Quantity = styled.div`
  width: 25%;
`
export const Price = styled.div`
  width: 25%;
`
export const Total = styled.span`
  align-self: flex-end;
  font-size: 1.5rem;
  font-weight: bold;
`
export const TotalContainer = styled.div`
  width: 100%;
  display: flex;
`
export const ButtonBox = styled.div`
  display: flex;
  align-items: flex-end;
  flex-basis: 100%;
`
export const AmountBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-basis: 100%;
`
export const SubTotalBox = styled.div`
  padding: 0.75rem;
  border-bottom: 1px solid var(--gray);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const TotalBox = styled.div`
  padding: 0.75rem;
`
export const TextBold = styled.span`
  font-weight: bold;
`
export const TextNormal = styled.span``
export const TotalNormal = styled(TextNormal)`
  font-size: 1.3rem;
`
export const ButtonLink = styled(Link)`
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  border: 1px solid var(--gray);
  font-weight: bold;
  text-decoration: none;
  color: black;
`
export const Cancelled = styled.span`
  color: var(--gray);
  text-decoration: line-through;
  font-weight: normal;
  margin-right: 0.95rem;
  font-size: 0.75rem;
`
