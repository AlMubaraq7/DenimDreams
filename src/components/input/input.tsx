import { UseFormRegister } from "react-hook-form"
import { StyledInput } from "./input.styles"
import { FormType } from "../../utils"

interface InputProps {
  label: string
  id: "email" | "password" | "confirmPassword"
  type?: string
  required?: boolean
  register: UseFormRegister<FormType>
  disabled: boolean
}
const Input: React.FC<InputProps> = ({
  label,
  id,
  register,
  required,
  disabled,
  type,
}) => {
  return (
    <>
      <StyledInput
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={label}
        disabled={disabled}
      />
    </>
  )
}

export default Input
