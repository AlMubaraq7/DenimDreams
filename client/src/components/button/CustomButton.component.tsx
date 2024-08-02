import { ButtonLink } from "./CustomButton.styles"
interface ButtonProps {
  children?: React.ReactNode
  link: string | ""
}

const CustomButton: React.FC<ButtonProps> = ({ children, link }) => {
  return <ButtonLink to={link}>{children}</ButtonLink>
}

export default CustomButton
