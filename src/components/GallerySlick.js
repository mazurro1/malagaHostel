import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import styled from "styled-components"
import Img from "gatsby-image"

const SlickSliderCustom = styled(Slider)`
  .slick-prev {
    &:before {
      color: black !important;
    }
  }
  .slick-next {
    &:before {
      color: black !important;
    }
  }
  .slick-dots {
    position: relative;
    top: 0;
  }
`

const DivImage = styled.div`
  padding: 20px;
`

const GallerySlick = ({ img }) => {
  const settings = {
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 10000,
  }
  return (
    <SlickSliderCustom {...settings}>
      <DivImage>
        <Img fluid={img} />
      </DivImage>
      <DivImage>
        <Img fluid={img} />
      </DivImage>
      <DivImage>
        <Img fluid={img} />
      </DivImage>
      <DivImage>
        <Img fluid={img} />
      </DivImage>
    </SlickSliderCustom>
  )
}
export default GallerySlick
