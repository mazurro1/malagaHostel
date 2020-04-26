import React from "react"
import CustomBackgroundImage from "../common/CustomBackgroundImage"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import styled from "styled-components"
import Img from "gatsby-image"
import { Colors } from "../common"

const StyledImg = styled(Img)`
  height: calc(100vh);
  margin: 0;
`

const CarouselStyle = styled(Carousel)`
  .dot {
    background-color: ${Colors.second} !important;
    &:active,
    &:focus {
      outline: none;
    }
  }
`

const ChildrenPosition = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Header = ({ home, img, children }) => (
  <header>
    {home ? (
      <CarouselStyle
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        emulateTouch
      >
        <div>
          <StyledImg fluid={img} />
          <ChildrenPosition>{children}</ChildrenPosition>
        </div>
        <div>
          <StyledImg fluid={img} />
          <ChildrenPosition>{children}</ChildrenPosition>
        </div>
        <div>
          <StyledImg fluid={img} />
          <ChildrenPosition>{children}</ChildrenPosition>
        </div>
      </CarouselStyle>
    ) : (
      <CustomBackgroundImage img={img} home={home}>
        {children}
      </CustomBackgroundImage>
    )}
  </header>
)

export default Header
