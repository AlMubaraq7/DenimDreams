import {
  Container,
  Box,
  TextBox,
  Title,
  Paragraph,
  Circle,
} from "./Hero.styles"
import CustomButton from "../../button/CustomButton.component"
import hero from "../../../assets/homepage/hero.png"
const Hero = () => {
  return (
    <Container>
      <Box>
        <TextBox>
          <Title>MIX & MATCH</Title>
          <Paragraph>Pick out the best mix for you</Paragraph>
          <CustomButton link="/collections">Explore now</CustomButton>
        </TextBox>
      </Box>
      <Box>
        <Circle />
        <img src={hero} alt="hero" />
      </Box>
    </Container>
  )
}

export default Hero
