import React from "react"
import styled from "styled-components"
import { Colors } from "../common"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"
import Img from "gatsby-image"

const GalleryClass = styled.div`
  overflow: hidden;
  margin-top: 50px;
  margin-bottom: 50px;

  .swiper-container {
    text-align: center;
    overflow: inherit !important;
    img {
      width: 600px;
      max-width: 100%;
    }
  }
  .swiper-container-3d {
    perspective: 400px;
  }
  .swiper-slide-next {
    transform: translate3d(0px, 0px, -1000px) rotateX(0deg) rotateY(-70deg) !important;
  }
  .swiper-slide-prev {
    // width: 600px;
    transform: translate3d(0px, 0px, -1000px) rotateX(0deg) rotateY(70deg) !important;
  }
  .swiper-slide-shadow-right {
    display: none;
  }
  .swiper-slide-shadow-left {
    display: none;
  }
  .overflowHidden {
    overflow: hidden;
  }
  .containerFluid {
    max-width: 1920px;
    margin: 0 auto;
    button:focus {
      outline: 1px dotted;
      outline: none;
    }
  }

  .swiper-button-next {
    background-color: transparent;
    border: none;
    background-image: none;
    color: white;
    padding: 40px 50px;
    animation-name: arrowRight;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
    animation-play-state: running;
    @media all and (max-width: 575px) {
      & {
        padding: 50px 10px;
      }
    }
    .arrowGalleryRight {
      position: relative;
      transform: rotate(180deg);

      .arrowUp {
        position: absolute;
        top: 0;
        height: 30px;
        width: 5px;
        background-color: black;
        transform: rotate(-45deg) translate(4px, -4px);
        border-radius: 10px;
        transition-property: background-color, transform;
        transition-duration: 0.3s;
        transition-timing-function: ease;
      }
      .arrowDown {
        position: absolute;
        bottom: 0;
        height: 30px;
        width: 5px;
        background-color: black;
        transform: rotate(45deg) translate(4px, 4px);
        border-radius: 10px;
        transition-property: background-color, transform;
        transition-duration: 0.3s;
        transition-timing-function: ease;
      }
    }
    &:hover {
      .arrowGalleryRight {
        transform: rotate(180deg);
        .arrowUp {
          background-color: ${Colors.second};
          transform: rotate(-45deg) translate(1px, -1px) scale(1.5);
        }
        .arrowDown {
          background-color: ${Colors.second};
          transform: rotate(45deg) translate(1px, 1px) scale(1.5);
        }
      }
    }
    &:after {
      display: none;
    }
    &:focus {
      outline: none;
    }
  }

  .swiper-button-prev {
    background-color: transparent;
    border: none;
    background-image: none;
    color: white;
    padding: 40px 50px;
    animation-name: arrowLeft;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
    animation-play-state: running;
    @media all and (max-width: 575px) {
      & {
        padding: 50px 10px;
      }
    }

    .arrowGalleryLeft {
      position: relative;

      .arrowUp {
        position: absolute;
        top: 0;
        height: 30px;
        width: 5px;
        background-color: black;
        transform: rotate(-45deg) translate(4px, -4px);
        border-radius: 10px;
        transition-property: background-color, transform;
        transition-duration: 0.3s;
        transition-timing-function: ease;
      }
      .arrowDown {
        position: absolute;
        bottom: 0;
        height: 30px;
        width: 5px;
        background-color: black;
        transform: rotate(45deg) translate(4px, 4px);
        border-radius: 10px;
        transition-property: background-color, transform;
        transition-duration: 0.3s;
        transition-timing-function: ease;
      }
    }
    &:hover {
      .arrowGalleryLeft {
        .arrowUp {
          background-color: ${Colors.second};
          transform: rotate(-45deg) translate(1px, -1px) scale(1.5);
        }
        .arrowDown {
          background-color: ${Colors.second};
          transform: rotate(45deg) translate(1px, 1px) scale(1.5);
        }
      }
    }
    &:after {
      display: none;
    }
    &:focus {
      outline: none;
    }
  }

  .swiper-pagination-bullet-active {
    background-color: ${Colors.second};
  }

  @keyframes arrowLeft {
    0% {
      transform: translate(0px, -30%);
    }
    50% {
      transform: translate(5px, -30%);
    }
    100% {
      transform: translate(0px, -30%);
    }
  }
  @keyframes arrowRight {
    0% {
      transform: translate(0px, -30%);
    }
    50% {
      transform: translate(-5px, -30%);
    }
    100% {
      transform: translate(0px, -30%);
    }
  }
  /* .swiper-pagination-bullets {
    bottom: -20px;
  } */
`

const CustomImageGallery = ({ images }) => {
  const params = {
    effect: "coverflow",
    grabCoursor: true,
    centereSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modyfier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev">
        <div className="arrowGalleryLeft">
          <div className="arrowUp" />
          <div className="arrowDown" />
        </div>
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next">
        <div className="arrowGalleryRight">
          <div className="arrowUp" />
          <div className="arrowDown" />
        </div>
      </button>
    ),
  }

  const allImages = images.map((item, index) => (
    <div key={index}>
      <Img fixed={item.fixed} alt={`Gallery image ${index}`} />
    </div>
  ))

  return (
    <GalleryClass>
      <Swiper {...params}>{allImages}</Swiper>
    </GalleryClass>
  )
}
export default CustomImageGallery
