import { motion } from "framer-motion"
import { ButtonLink } from "../navbar/Navbar.styles"
import styled from "styled-components"

export const MobileNavContainer = styled(motion.div)`
  position: fixed;
  width: 100%;
  z-index: 13;
  display: none;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100vh;
  backdrop-filter: blur(8px);
  @media only screen and (max-width: 768px) {
    display: flex;
  }
`
export const MobileLinkBox = styled(motion.div)`
  padding: 3rem 1.5rem;
  display: none;
  gap: 1.5rem;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.15);
  font-size: 1.25rem;
  font-family: "Josefin Sans", sans-serif;
  letter-spacing: 0.5px;
  border-radius: 15px;
  background-color: white;
  @media only screen and (max-width: 768px) {
    display: flex;
    width: 400px;
  }
  @media only screen and (max-width: 480px) {
    display: flex;
    width: 250px;
  }
`
export const MobileButtonLink = motion(ButtonLink)
export const MobileSpanLink = styled(motion.span)``
