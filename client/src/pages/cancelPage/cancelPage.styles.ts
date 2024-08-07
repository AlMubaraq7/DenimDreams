import { Link } from "react-router-dom"
import styled from "styled-components"
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 250px;
  height: 350px;
  padding: 1.5rem;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.25);
  background-color: white;
`
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`
export const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #d04a3c;
  position: relative;
`
export const Mark = styled.span`
  position: absolute;
  color: #d04a3c;
  font-size: 2.85rem;
  top: 1.25rem;
  left: 2.15rem;
  font-weight: 300;
`
export const ButtonLink = styled(Link)`
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  border: 1px solid #d04a3c#d04a3c;
  font-weight: bold;
  text-decoration: none;
  color: white;
  background-color: #d04a3c;
  text-align: center;
`
