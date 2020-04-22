import React from "react"
import styled from "styled-components"
import { Colors } from "../common"

const FooterStyle = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 6px 0;
  background-color: ${Colors.basicDark};
  color: ${Colors.basicText};
  font-size: 0.8rem;
  text-align: center;
`

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <FooterStyle>
      &copy; {date} Hubert Mazur | Wszelkie prawa zastrzeżone.
    </FooterStyle>
  )
}
export default Footer
