import Input from "../input/input"
import { z } from "zod"
import {
  Box,
  Button,
  Container,
  ErrorContainer,
  ZodMessage,
  Form,
  FormContainer,
  Heading,
  Paragraph,
  TextContainer,
  SocialButtons,
  IconContainer,
  GoogleIcon,
  GithubIcon,
  InvisibleErrorContainer,
} from "./sign-in.styles"
import { SubmitHandler, useForm, FieldValues } from "react-hook-form"
import { useCallback, useEffect, useState } from "react"
import {
  signUpStart,
  emailSignInStart,
  googleSignInStart,
} from "../../redux/users/user.slice"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import Loading from "../loading/Loading.component"
import { createFormSchema, UserType } from "../../utils"
import FirebaseErrorMessage from "./error"
const SignIn = () => {
  type Variant = "Login" | "Register"
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { user, isAuthenticating } = useAppSelector((state) => state.user)
  const [variant, setVariant] = useState<Variant>("Login")
  const [passwordMismatch, setPasswordMismatch] = useState<boolean>(false)
  const [disabled, setDisabled] = useState<boolean>(false)

  // HANDLE ROUTING ON USER CHANGE
  const navigateOnUserChange = useCallback((user: UserType) => {
    if (user) {
      navigate("/collections")
    }
  }, [])

  useEffect(() => {
    navigateOnUserChange(user)
  }, [user])

  // FORM VALIDATION
  const formSchema = createFormSchema(variant)
  type FormType = z.infer<typeof formSchema>
  const {
    register,
    handleSubmit,
    getValues,
    resetField,
    formState: { errors },
  } = useForm<FormType>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(formSchema),
  })
  const resetOnSwitch = (variant: Variant) => {
    setVariant(variant)
    resetField("email")
    resetField("password")
    resetField("confirmPassword")
  }
  //
  // SIGN IN FUNCTIONS
  const googleSignInAndNavigate = () => {
    dispatch(googleSignInStart())
  }
  const onSubmit: SubmitHandler<FieldValues> = async () => {
    const { email, password, confirmPassword } = getValues()
    switch (variant) {
      case "Login":
        setDisabled(true)
        dispatch(emailSignInStart({ email, password }))
        setDisabled(false)
        break
      case "Register":
        if (password === confirmPassword) {
          setPasswordMismatch(false)
          setDisabled(true)
          dispatch(signUpStart({ email, password }))
          setDisabled(false)
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
        <Loading />
      ) : (
        <Container data-variant={variant}>
          <FormContainer
            layout
            transition={{
              type: "spring",
              bounce: 0.3,
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Heading $blue>
              {variant === "Login" ? "Sign in" : "Create Account"}
            </Heading>
            {/* <SocialButtons>
              <IconContainer onClick={() => googleSignInAndNavigate()}>
                <GoogleIcon />
              </IconContainer>
              <IconContainer>
                <GithubIcon />
              </IconContainer>
            </SocialButtons> */}
            {/* <Paragraph $grey>
              {variant === "Login"
                ? "or use your email"
                : "or use your email for registration"}
            </Paragraph> */}
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
                  <ZodMessage>{errors.email.message}</ZodMessage>
                </ErrorContainer>
              ) : (
                <InvisibleErrorContainer />
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
                  <ZodMessage>{errors.password.message}</ZodMessage>
                </ErrorContainer>
              ) : (
                <InvisibleErrorContainer />
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
                    onChange={() => setPasswordMismatch(false)}
                  />
                  {errors.confirmPassword ? (
                    <ErrorContainer>
                      <ZodMessage>{errors.confirmPassword.message}</ZodMessage>
                    </ErrorContainer>
                  ) : (
                    <InvisibleErrorContainer />
                  )}
                  {passwordMismatch ? (
                    <ErrorContainer>
                      <ZodMessage>Password Mismatch</ZodMessage>
                    </ErrorContainer>
                  ) : (
                    <InvisibleErrorContainer />
                  )}
                </>
              )}
              <ErrorContainer>
                <FirebaseErrorMessage />
              </ErrorContainer>
              <Button type="submit" $submit disabled={disabled}>
                {variant === "Login" ? "SIGN IN" : "SIGN UP"}
              </Button>
            </Form>
          </FormContainer>
          <TextContainer
            layout
            transition={{
              ease: "anticipate",
            }}
          >
            <Heading>
              {" "}
              {variant === "Login" ? "Hello Dreamers!" : "Welcome Back!"}
            </Heading>
            <Paragraph>
              {variant === "Login"
                ? "Enter your personal details and begin your journey with us"
                : "To keep connected with us please login with your personal info"}
            </Paragraph>
            <Button
              onClick={() =>
                variant === "Login"
                  ? resetOnSwitch("Register")
                  : resetOnSwitch("Login")
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
