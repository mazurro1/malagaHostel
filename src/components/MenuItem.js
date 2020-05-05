import React, { useEffect } from "react"
import styled from "styled-components"
import sal from "sal.js"
import CustomBackgroundImageMenu from "../common/CustomBackgroundImageMenu"
import { Colors } from "../common"

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  min-height: ${props => (props.isOnlyTitle ? "0px" : "200px")};
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  padding: 1px;

  .icon {
    padding-right: 10px;
    /* font-size: 0.9rem; */
  }

  .namePrice {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 0.6rem !important;
    font-weight: 600;
    padding-top: 2px;
  }

  .price {
    font-weight: 600;
  }

  .menuPrice {
    position: relative;
    border: none;
    border-radius: 2px;
    padding: ${props => (props.isOnlyTitle ? "12px 10px" : "5px 10px")};
    min-width: 100px;
    background-color: ${Colors.second};
    color: ${Colors.basicText};
    font-size: 0.8rem;
    transition-property: background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    &:hover {
      background-color: ${Colors.secondDark};
    }
  }

  h3 {
    @media all and (min-width: 576px) {
      padding-right: 100px;
    }
  }

  .pricePosition {
    position: absolute;
    right: 5px;
    @media all and (max-width: 575px) {
      bottom: 0;
    }
    @media all and (min-width: 576px) {
      top: 0px;
    }
  }

  .line {
    height: 2px;
    width: 50px;
    background-color: ${Colors.second};
    margin-bottom: 20px;
    border-radius: 10px;
  }
`

const Hidden = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
`

const MenuItem = ({ items, language }) => {
  useEffect(() => {
    sal({
      threshold: 0.1,
      once: true,
    })
  }, [language])
  const itemsMap = items.map((item, index) => {
    const image = item.image ? (
      <div className="col-12 col-sm-6 col-md-4 col-lg-6">
        <CustomBackgroundImageMenu img={item.image.fluid} />
      </div>
    ) : null
    const descriptionName =
      language === "ES"
        ? "description"
        : `description${language.charAt(0)}${language.charAt(1).toLowerCase()}`
    const description = item.description ? (
      <p className="mb-5 mb-sm-0">{item.description[descriptionName]}</p>
    ) : null

    const isOnlyTitle = !item.description && !item.image ? true : false
    const stringPrice = item.price.toString()
    const ifChangeDot = stringPrice.includes(".")
    let finnalyPrice = stringPrice
    if (ifChangeDot) {
      const indexComaPrice = stringPrice.lastIndexOf(".")
      const firstPrice = stringPrice.slice(0, indexComaPrice)
      const secondPrice = stringPrice.slice(
        indexComaPrice + 1,
        stringPrice.length
      )
      console.log(secondPrice)
      finnalyPrice = `${firstPrice},${
        secondPrice.length > 1 ? secondPrice : secondPrice + "0"
      }`
    }
    return (
      <div
        className="col-lg-6 col-12 mb-4"
        key={index}
        data-sal={index % 2 ? "slide-left" : "slide-right"}
        data-sal-duration="500"
        data-sal-easing="ease-out-bounce"
      >
        <Card isOnlyTitle={isOnlyTitle}>
          <Hidden>
            <div className="row">
              {image}
              <div
                className={`col-12 ${
                  item.image ? "col-sm-6 col-md-8 col-lg-6 pl-sm-0" : ""
                }  pl-4  pt-2`}
              >
                <h3 className={`${isOnlyTitle ? "mb-2" : ""}`}>{item.name}</h3>
                {item.description ? <div className="line" /> : null}
                {description}
                <div className="pricePosition">
                  <button className="menuPrice mr-2">
                    <span className="icon">€</span>
                    <span className="price">{finnalyPrice}</span>
                  </button>
                </div>
              </div>
            </div>
          </Hidden>
        </Card>
      </div>
    )
  })

  return <div className="row">{itemsMap}</div>
}
export default MenuItem
