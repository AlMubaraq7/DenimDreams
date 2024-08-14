import {
  Container,
  Box,
  TextBox,
  Title,
  Paragraph,
  Image,
  Circle,
  ImageContainer,
  ImageBox,
} from "./Hero.styles"
import CustomButton from "../button/CustomButton.component"
import hero from "../../assets/hero.png"

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
      <ImageBox>
        <Circle />
        <ImageContainer>
          <Image src={hero} alt="hero" />
        </ImageContainer>
      </ImageBox>
    </Container>
  )
}

export default Hero
