import styled from "styled-components"

export const Container = styled.section`
  height: 600px;
  padding: 0px 60px;
  display: flex;
  gap: 4rem;
  align-items: center;
  overflow: hidden;
  @media only screen and (max-width: 1024px) {
    gap: 2rem;
  }
  @media only screen and (max-width: 850px) {
    padding: 0px 30px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 60px;
    gap: 4rem;
  }
`
export const Box = styled.div`
  flex: 1 1;
  display: flex;
  justify-content: center;
  position: relative;
  @media only screen and (max-width: 768px) {
    overflow: hidden;
  }
`
export const ImageBox = styled(Box)`
  flex: 2.5 1;
  display: flex;
  justify-content: center;
  position: relative;
`
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding-bottom: 1.75rem;
  align-items: center;
  @media only screen and (max-width: 768px) {
    padding-bottom: 0;
    gap: 1.05rem;
  }
  @media only screen and (max-width: 480px) {
    gap: 1.25rem;
  }
`
export const Title = styled.h1`
  color: var(--primary);
  font-size: 4.75rem;
  font-weight: bold;
  @media only screen and (max-width: 1024px) {
    font-size: 4rem;
  }
  @media only screen and (max-width: 850px) {
    font-size: 3.85rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 3rem;
  }
`
export const Paragraph = styled.p`
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.5rem;
  color: var(--primary);
  font-weight: 500;
  @media only screen and (max-width: 1024px) {
    font-size: 1.25rem;
  }
  @media only screen and (max-width: 480px) {
    font-size: 1.15rem;
  }
`
export const ImageContainer = styled.div`
  width: 600px;
  position: absolute;
  left: -3rem;
  top: -15.5rem;
  @media only screen and (max-width: 1200px) {
    left: -5rem;
    top: -12.5rem;
    width: 550px;
  }
  @media only screen and (max-width: 1024px) {
    width: 425px;
    left: -2rem;
    top: -9.5rem;
  }
  @media only screen and (max-width: 850px) {
    width: 425px;
    left: -5rem;
    top: -9.5rem;
  }
  @media only screen and (max-width: 768px) {
    position: relative;
    width: 450px;
    top: -6rem;
    left: -8.5rem;
  }
  @media only screen and (max-width: 480px) {
    position: relative;
    width: 425px;
    top: -6rem;
    left: -9.5rem;
  }
`
export const Image = styled.img`
  object-fit: cover;
`
export const Circle = styled.div`
  height: 350px;
  width: 350px;
  border-radius: 50%;
  background-color: var(--primary);
  @media only screen and (max-width: 1200px) {
    margin-left: 2rem;
  }
  @media only screen and (max-width: 1024px) {
    height: 275px;
    width: 275px;
    margin-left: 3rem;
  }
  @media only screen and (max-width: 850px) {
    height: 275px;
    width: 275px;
    margin-right: 1rem;
  }
  @media only screen and (max-width: 768px) {
    left: 15rem;
    top: 5rem;
    position: relative;
  }
`
