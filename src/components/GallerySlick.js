import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import styled from "styled-components"
import Img from "gatsby-image"
import useWindowSize from "../common/useWindowSize"

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

const GallerySlick = ({ images, imagesOnSide = 2 }) => {
  const { width } = useWindowSize()
  const settings = {
    dots: true,
    slidesToShow: width > 991 ? imagesOnSide : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  const mapImages = images.map((item, index) => {
    return (
      <DivImage key={index}>
        <Img fluid={item.fluid} />
      </DivImage>
    )
  })

  return <SlickSliderCustom {...settings}>{mapImages}</SlickSliderCustom>
}
export default GallerySlick
