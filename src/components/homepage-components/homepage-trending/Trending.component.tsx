import {
  Container,
  Box,
  Title,
  ExtrasBox,
  SvgContainer,
  TextContainer,
  Heading,
  Paragraph,
  ShippingSvg,
  SecureSvg,
  BoxedSvg,
  TrendingContainer,
  ItemContainer,
  ItemBox,
  ItemImg,
  ItemName,
  ItemPrice,
} from "./Trending.styles"
import trendingItems from "../../../data/trending.data"
const Trending = () => {
  return (
    <Container>
      <Box
        style={{
          gap: "3rem",
        }}
      >
        <ExtrasBox>
          <SvgContainer>
            <ShippingSvg />
          </SvgContainer>
          <TextContainer>
            <Heading>Free Shipping</Heading>
            <Paragraph>Capped at $39 per order</Paragraph>
          </TextContainer>
        </ExtrasBox>
        <ExtrasBox>
          <SvgContainer>
            <SecureSvg />
          </SvgContainer>
          <TextContainer>
            <Heading>Secure Payments</Heading>
            <Paragraph>Up to 12 months installments</Paragraph>
          </TextContainer>
        </ExtrasBox>
        <ExtrasBox>
          <SvgContainer>
            <BoxedSvg />
          </SvgContainer>
          <TextContainer>
            <Heading>14-Day Returns</Heading>
            <Paragraph>Shop with Confidence</Paragraph>
          </TextContainer>
        </ExtrasBox>
      </Box>
      <div>
        <TrendingContainer>
          <Title>Trending</Title>
          <ItemContainer>
            {trendingItems.map((item) => (
              <ItemBox key={item.id}>
                <ItemImg
                  style={{
                    backgroundImage: `url(${item.imageUrl})`,
                  }}
                />
                <ItemName>{item.name}</ItemName>
                <ItemPrice>${item.price}</ItemPrice>
              </ItemBox>
            ))}
          </ItemContainer>
        </TrendingContainer>
      </div>
      <Box></Box>
    </Container>
  )
}

export default Trending
