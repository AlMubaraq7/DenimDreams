import styled from "styled-components"

export const Container = styled.section`
  height: 600px;
  padding: 0px 60px;
  display: flex;
  gap: 4rem;
  align-items: center;
  overflow: hidden;
`
export const Box = styled.div`
  flex: 1 1;
  display: flex;
  justify-content: center;
  position: relative;
  & > img {
    width: 600px;
    position: absolute;
    left: -3rem;
    top: -15.5rem;
  }
`
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding-bottom: 1.75rem;
  align-items: center;
`
export const Title = styled.h1`
  color: var(--primary);
  font-size: 5rem;
  font-weight: bold;
`
export const Paragraph = styled.p`
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.75rem;
  color: var(--primary);
`
export const Circle = styled.div`
  height: 350px;
  width: 350px;
  border-radius: 50%;
  background-color: var(--primary);
`
