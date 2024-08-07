import { useEffect } from "react"
import {
  Container,
  Card,
  TextBox,
  Circle,
  Mark,
  ButtonLink,
} from "./successPage.styles"
import { useAppDispatch } from "../../app/hooks"
import { clearAllItems } from "../../redux/cart/cart.slice"
export const SuccessPage = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(clearAllItems())
  }, [])
  return (
    <Container>
      <Card>
        <TextBox>
          <span
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
            }}
          >
            Success!
          </span>
          <span
            style={{
              color: "grey",
            }}
          >
            Your items are on the way.
          </span>
        </TextBox>
        <Circle>
          <Mark>&#10003;</Mark>
        </Circle>
        <ButtonLink to="/collections">Continue</ButtonLink>
      </Card>
    </Container>
  )
}
