import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const CustomBackgroundImageMenu = ({ img, className, children, home }) => {
  return (
    <BackgroundImage className={className} fluid={img} home={home}>
      {children}
    </BackgroundImage>
  )
}
// skrócony zapis dodawania styli
export default styled(CustomBackgroundImageMenu)`
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
  opacity: 0.99 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
