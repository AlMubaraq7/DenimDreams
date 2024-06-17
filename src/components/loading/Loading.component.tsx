import { Container } from "./Loading.styles"
import { PuffLoader } from "react-spinners"

const Loading = () => {
  return (
    <Container>
      <PuffLoader color="hsl(205, 66%, 16%)" size={200} speedMultiplier={1.5} />
    </Container>
  )
}

export default Loading
