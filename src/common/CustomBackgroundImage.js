import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { Colors } from "../common"

const CustomBackgroundImage = ({ img, className, children, home }) => {
  return (
    <BackgroundImage className={className} fluid={img} home={home}>
      {children}
    </BackgroundImage>
  )
}
// skrócony zapis dodawania styli
export default styled(CustomBackgroundImage)`
  min-height: ${props => (props.home ? "calc(100vh - 105px)" : "50vh")};
  opacity: 0.99 !important;
  position: relative;
  overflow: hidden;

  &::before {
    background-attachment: fixed;
    background-position: 50% 0;
    background-repeat: no-repeat;
    background-size: cover;
  }
`
