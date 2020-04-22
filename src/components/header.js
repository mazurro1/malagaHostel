import React from "react"
import CustomBackgroundImage from "../common/CustomBackgroundImage"

const Header = ({ home, img, children }) => (
  <header>
    <CustomBackgroundImage img={img} home={home}>
      {children}
    </CustomBackgroundImage>
  </header>
)

export default Header
