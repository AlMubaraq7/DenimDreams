import { ReactNode } from "react"
import { Container, ButtonLink } from "./CustomButton.styles"
interface Props {
  children?: ReactNode
  link: string | ""
}

const CustomButton = ({ children, link }: Props) => {
  return (
    <Container>
      <ButtonLink to={link}>{children}</ButtonLink>
    </Container>
  )
}

export default CustomButton
