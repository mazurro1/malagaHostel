import React from "react"
import CustomBackgroundImage from "../common/CustomBackgroundImage"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import styled from "styled-components"
import Img from "gatsby-image"
import { Colors } from "../common"

const StyledImg = styled(Img)`
  height: ${props => (props.home ? "100vh" : "60vh")};
  min-height: 700px;
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
  z-index: 5000;
`

const Header = ({
  home = false,
  img,
  children,
  imagesSlider = [],
  imagesText,
}) => {
  const mapSlider =
    imagesSlider.length > 0
      ? imagesSlider.map((item, index) => {
          const text = imagesText[index] ? (
            <p className="legend">{imagesText[index]} </p>
          ) : null
          return (
            <div key={index}>
              <StyledImg fluid={item.fluid} home={home} />
              <ChildrenPosition>{children}</ChildrenPosition>
              {text}
            </div>
          )
        })
      : null
  return (
    <header>
      {imagesSlider.length > 0 ? (
        <CarouselStyle
          showStatus={false}
          showThumbs={false}
          infiniteLoop
          // autoPlay
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
