import styled from "styled-components"
import Google from "../../assets/google.svg"
import Github from "../../assets/github.svg"
import { motion } from "framer-motion"
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  border: 3px solid var(--primary);
  border-radius: 5px;
  transition: all 200ms linear;
  &[data-variant="Register"] {
    flex-direction: row-reverse;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`
export const FormContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  gap: 0.75rem;
  flex-basis: 100%;
`
export const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--primary);
  padding: 1.5rem;
  gap: 1rem;
  flex-basis: 100%;
`
export const Paragraph = styled.p<{ $grey?: boolean }>`
  color: ${(props) => (props.$grey ? "darkgrey" : "white")};
  font-weight: lighter;
  width: 85%;
  line-height: 1.4;
  text-align: center;
`
export const Heading = styled.h1<{ $blue?: boolean }>`
  color: ${(props) => (props.$blue ? "var(--primary)" : "white")};
  font-size: 2.5rem;
`
export const Button = styled.button<{ $submit?: boolean }>`
  font-family: "Nunito", sans-serif;
  border: ${(props) => (props.$submit ? "none" : "1px solid white")};
  padding: 0.5rem 2rem;
  background-color: ${(props) =>
    props.$submit ? "var(--primary)" : "transparent"};
  color: white;
  cursor: pointer;
  border-radius: 50px;
`
export const ErrorContainer = styled.div`
  width: 120%;
  transition: all 250ms linear;
`
export const InvisibleErrorContainer = styled(ErrorContainer)`
  opacity: 0;
`
export const ZodMessage = styled.span`
  color: red;
  font-size: 0.85rem;
`
export const SocialButtons = styled.div`
  display: flex;
  gap: 1rem;
`
export const IconContainer = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
`
export const GoogleIcon = styled.img.attrs((props) => ({
  src: Google,
}))`
  object-fit: contain;
`
export const GithubIcon = styled.img.attrs((props) => ({
  src: Github,
}))`
  object-fit: contain;
`
