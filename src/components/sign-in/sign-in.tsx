import Input from "../input/input"
import { z } from "zod"
import {
  Box,
  Button,
  Container,
  LoadingContainer,
  ErrorContainer,
  ErrorMessage,
  Form,
  FormContainer,
  Heading,
  Paragraph,
  TextContainer,
  SocialButtons,
  IconContainer,
  GoogleIcon,
  GithubIcon,
} from "./sign-in.styles"
import { SubmitHandler, useForm, FieldValues } from "react-hook-form"
import { useState } from "react"
import {
  signUpStart,
  emailSignInStart,
  googleSignInStart,
} from "../../redux/users/user.slice"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { PuffLoader } from "react-spinners"
const SignIn = () => {
  type Variant = "Login" | "Register"

  // HOOKS
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { user, isAuthenticating } = useAppSelector((state) => state.user)
  const [variant, setVariant] = useState<Variant>("Login")
  const [passwordMismatch, setPasswordMismatch] = useState<boolean>(false)
  const [disabled, setDisabled] = useState<boolean>(false)
  // console.log(user)
  // FORM VALIDATION
  const formSchema = z.object({
    email: z.string().email({
      message: "Enter a valid email",
    }),
    password: z
      .string()
      .min(7, {
        message: "Password must be atleast 7 characters long",
      })
      .max(20, {
        message: "Password must not exceed 20 characters",
      }),
    confirmPassword:
      variant === "Register"
        ? z
            .string()
            .min(7, {
              message: "Password must be atleast 7 characters long",
            })
            .max(20, {
              message: "Password must not exceed 20 characters",
            })
        : z.literal(""),
  })
  type FormType = z.infer<typeof formSchema>
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormType>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(formSchema),
  })
  //
  // SIGN IN FUNCTIONS
  const googleSignInAndNavigate = () => {
    dispatch(googleSignInStart())
    navigate("/collections")
  }
  const onSubmit: SubmitHandler<FieldValues> = async () => {
    //TODO: HANDLE ERROR FOR INVALID AUTH
    const { email, password, confirmPassword } = getValues()
    switch (variant) {
      case "Login":
        dispatch(emailSignInStart({ email, password }))
        navigate("/collections")
        break
      case "Register":
        if (password === confirmPassword) {
          setPasswordMismatch(false)
          dispatch(signUpStart({ email, password }))
          navigate("/collections")
        } else {
          setPasswordMismatch(true)
        }
        break
      default:
        break
    }
  }
  return (
    <Box>
      {isAuthenticating ? (
        <LoadingContainer>
          <PuffLoader
            color="hsl(205, 66%, 16%)"
            size={150}
            speedMultiplier={1.5}
          />
        </LoadingContainer>
      ) : (
        <Container>
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <Heading $blue>
              {variant === "Login" ? "Sign in" : "Create Account"}
            </Heading>
            <SocialButtons>
              <IconContainer onClick={() => googleSignInAndNavigate()}>
                <GoogleIcon />
              </IconContainer>
              <IconContainer>
                <GithubIcon />
              </IconContainer>
            </SocialButtons>
            <Paragraph $grey>
              {variant === "Login"
                ? "or use your email"
                : "or use your email for registration"}
            </Paragraph>
            <Form>
              <Input
                id="email"
                register={register}
                label="Email address"
                required
                disabled={disabled}
              />
              {errors.email ? (
                <ErrorContainer>
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
                </ErrorContainer>
              ) : (
                <ErrorContainer
                  style={{
                    opacity: "0",
                  }}
                ></ErrorContainer>
              )}
              <Input
                id="password"
                register={register}
                label="Password"
                type="password"
                required
                disabled={disabled}
              />
              {errors.password ? (
                <ErrorContainer>
                  <ErrorMessage>{errors.password.message}</ErrorMessage>
                </ErrorContainer>
              ) : (
                <ErrorContainer
                  style={{
                    opacity: "0",
                  }}
                ></ErrorContainer>
              )}
              {variant === "Login" ? (
                ""
              ) : (
                <>
                  <Input
                    id="confirmPassword"
                    register={register}
                    label="Confirm Password"
                    required
                    disabled={disabled}
                    type="password"
                  />
                  {errors.confirmPassword ? (
                    <ErrorContainer>
                      <ErrorMessage>
                        {errors.confirmPassword.message}
                      </ErrorMessage>
                    </ErrorContainer>
                  ) : (
                    <ErrorContainer
                      style={{
                        opacity: "0",
                      }}
                    ></ErrorContainer>
                  )}
                  {passwordMismatch ? (
                    <ErrorContainer>
                      <ErrorMessage>Password Mismatch</ErrorMessage>
                    </ErrorContainer>
                  ) : (
                    <ErrorContainer
                      style={{
                        opacity: "0",
                      }}
                    ></ErrorContainer>
                  )}
                </>
              )}
              <Button type="submit" $submit>
                {variant === "Login" ? "SIGN IN" : "SIGN UP"}
              </Button>
            </Form>
          </FormContainer>
          <TextContainer>
            <Heading>
              {" "}
              {variant === "Login" ? "Hello Friend!" : "Welcome Back!"}
            </Heading>
            <Paragraph>
              {variant === "Login"
                ? "Enter your personal details and begin your journey with us"
                : "To keep connected with us please login with your personal info"}
            </Paragraph>
            <Button
              onClick={() =>
                variant === "Login"
                  ? setVariant("Register")
                  : setVariant("Login")
              }
            >
              {variant === "Login" ? "SIGN UP" : "SIGN IN"}
            </Button>
          </TextContainer>
        </Container>
      )}
    </Box>
  )
}

export default SignIn
