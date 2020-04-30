import React from "react"
import styled from "styled-components"
import { Colors } from "../common"

const H1Style = styled.h1`
  width: ${props => `${props.width}px`};
  max-width: 100%;
  margin: 0 auto;
  font-weight: 300;
  text-align: center;
  font-weight: ${props => (props.bgDark ? "bold" : "normal")};
  border-radius: 3px;
  color: ${props => (props.dark ? "white" : "#212121")};
  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
`

const WhiteLine = styled.div`
  width: 40px;
  max-width: 80%;
  height: 2px;
  background-color: ${Colors.secondDark};
  margin: 20px auto;
  margin-bottom: 20px;
  border-radius: 5px;
`

export const Title = ({ children, width = 300, dark = false, bgDark }) => {
  return (
    <>
      <H1Style width={width} dark={dark} bgDark={bgDark}>
        {children}
      </H1Style>
      <WhiteLine dark={dark} />
    </>
  )
}
