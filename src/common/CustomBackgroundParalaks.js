import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const CustomBackgroundParalaks = ({ img, className, children }) => {
  return (
    <BackgroundImage className={className} fluid={img}>
      {children}
    </BackgroundImage>
  )
}
export default styled(CustomBackgroundParalaks)`
  max-height: 500px;
  min-height: 400px;
  position: relative;
  overflow: hidden;

  &::before {
    background-attachment: fixed;
    background-position: 50% 0;
    background-repeat: no-repeat;
    background-size: cover;
  }
`
