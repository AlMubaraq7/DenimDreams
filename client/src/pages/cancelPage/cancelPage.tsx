import {
  Container,
  Card,
  TextBox,
  Circle,
  Mark,
  ButtonLink,
} from "./cancelPage.styles"
export const CancelPage = () => {
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
            Failed!
          </span>
          <span
            style={{
              color: "grey",
            }}
          >
            Something went wrong.
          </span>
        </TextBox>
        <Circle>
          <Mark>X</Mark>
        </Circle>
        <ButtonLink to="/checkout">Try again</ButtonLink>
      </Card>
    </Container>
  )
}
