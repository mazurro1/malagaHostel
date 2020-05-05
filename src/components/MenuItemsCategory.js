import React from "react"
import MenuItem from "./MenuItem"
import styled from "styled-components"
import { Colors } from "../common"

const Line = styled.div`
  height: 2px;
  width: 50px;
  background-color: ${Colors.secondDark};
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 10px;
`

const MenuItemsCategory = ({ allItemsSorted, language }) => {
  const mapMenu = allItemsSorted.map((item, index) => {
    item.items.sort((a, b) => {
      const firstValue = a.productPosition
      const secondValue = b.productPosition
      if (firstValue < secondValue) {
        return -1
      } else if (firstValue > secondValue) {
        return 1
      } else {
        return 0
      }
    })

    return (
      <div className="col-12 mb-4" key={index}>
        <h1 className="mb-2 text-center">{item.category}</h1>
        <Line />
        <MenuItem items={item.items} language={language} />
      </div>
    )
  })
  return <div className="row">{mapMenu}</div>
}
export default MenuItemsCategory
