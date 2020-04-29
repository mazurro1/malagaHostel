import React, { useEffect } from "react"
import styled from "styled-components"
import sal from "sal.js"
import CustomBackgroundImageMenu from "../common/CustomBackgroundImageMenu"
import { Colors } from "../common"

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  min-height: 200px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  padding: 1px;

  .icon {
    padding-right: 10px;
    font-size: 0.9rem;
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
    padding: 5px 10px;
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

const MenuItem = ({ items }) => {
  useEffect(() => {
    sal({
      threshold: 0.1,
      once: true,
    })
  }, [items])
  const itemsMap = items.map((item, index) => {
    console.log(item)
    const image = item.image ? (
      <CustomBackgroundImageMenu img={item.image.fluid} />
    ) : null
    return (
      <div
        className="col-lg-6 col-12 mb-4"
        key={index}
        data-sal={index % 2 ? "slide-left" : "slide-right"}
        data-sal-duration="500"
        data-sal-easing="ease-out-bounce"
      >
        <Card>
          <Hidden>
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4 col-lg-6">{image}</div>
              <div className="col-12 col-sm-6 col-md-8 col-lg-6 pl-4 pl-sm-0 pt-2">
                <h3>{item.name}</h3>
                <div className="line" />
                <p className="mb-5 mb-sm-0">{item.description.description}</p>
                <div className="pricePosition">
                  <button className="menuPrice mr-2">
                    <span className="icon">$</span>
                    <span className="price">{item.price}</span>
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
