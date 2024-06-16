import {
  Container,
  Box,
  TextBox,
  Title,
  Paragraph,
  Circle,
} from "./Hero.styles"
import CustomButton from "../../../components/button/CustomButton.component"
import hero from "../../../assets/hero.png"
const Hero = () => {
  return (
    <Container>
      <Box>
        <TextBox>
          <Title>DenimDreams</Title>
          <Paragraph>Embrace the Denim Lifestyle</Paragraph>
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
