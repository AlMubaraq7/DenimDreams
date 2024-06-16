import { Container, ButtonLink } from "./CustomButton.styles"
interface ButtonProps {
  children?: React.ReactNode
  link: string | ""
}

const CustomButton: React.FC<ButtonProps> = ({ children, link }) => {
  return (
    <Container>
      <ButtonLink to={link}>{children}</ButtonLink>
    </Container>
  )
}

export default CustomButton
