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

const Header = ({ home, img, children, imagesSlider = [] }) => {
  const mapSlider =
    imagesSlider.length > 0
      ? imagesSlider.map((item, index) => {
          return (
            <div key={index}>
              <StyledImg fluid={item.fluid} />
              <ChildrenPosition>{children}</ChildrenPosition>
            </div>
          )
        })
      : null
  return (
    <header>
      {home && imagesSlider.length > 0 ? (
        <CarouselStyle
          showStatus={false}
          showThumbs={false}
          infiniteLoop
          autoPlay
        >
          {mapSlider}
        </CarouselStyle>
      ) : (
        <CustomBackgroundImage img={img} home={home}>
          {children}
        </CustomBackgroundImage>
      )}
    </header>
  )
}

export default Header
