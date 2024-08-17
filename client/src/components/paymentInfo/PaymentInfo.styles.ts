import styled from "styled-components"
import { motion } from "framer-motion"
export const Container = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 93%;
  font-family: "Nunito", sans-serif;
  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: blur(5px);
  z-index: 2;
  overflow-y: hidden;
`
export const Modal = styled.div`
  width: 350px;
  height: 300px;
  padding: 1.5rem;
  background-color: white;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.35);
  position: relative;
`
export const Close = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
  margin-right: 2px;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media only screen and (max-width: 480px) {
    font-size: 0.85rem;
  }
`
export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 3.5rem;
`
