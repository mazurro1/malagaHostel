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
  min-height: ${props => (props.home ? "calc(100vh - 105px)" : "40vh")};
  background: ${props =>
    props.home
      ? `linear-gradient(rgba(${Colors.basicHash}, 0.7), rgba(0, 0, 0, 0.7))`
      : `linear-gradient(rgba(${Colors.basicHash}, 0.7), rgba(${Colors.basicHash}, 0.7))`};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
