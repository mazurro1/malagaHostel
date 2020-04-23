import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { Colors } from "../common"

const CustomBackgroundImageRoom = ({ img, className, children, home }) => {
  return (
    <BackgroundImage className={className} fluid={img} home={home}>
      {children}
    </BackgroundImage>
  )
}
// skrócony zapis dodawania styli
export default styled(CustomBackgroundImageRoom)`
  width: 100%;
  height: 300px;
  background-position: center;
  background-size: cover;
  opacity: 0.99 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
