import React from "react"
import styled from "styled-components"
import { Colors, Routes, AniLinkCustom } from "../common"
import { FaMobileAlt, FaFacebook } from "react-icons/fa"
import logo from "../images/logoHostel.png"

const NavStyle = styled.nav`
  position: sticky;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${Colors.navColor};
  border-bottom: 1px solid ${Colors.basic};
`
const UpperNav = styled.div`
  background-color: ${Colors.basicDark};
  text-align: right;
  color: ${Colors.basicText};
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.2rem;
  svg {
    font-size: 1rem;
    margin-bottom: 5px;
    margin-top: 5px;
  }

  a {
    color: ${Colors.basicText};
    transition-property: color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    &:hover {
      color: ${Colors.basicLight};
    }
  }
`
const LiStyle = styled.li`
  display: inline-block;
  padding: 25px 0px;
  a {
    color: ${props => (props.isActive ? Colors.navColor : Colors.navText)};
    padding: 30px 20px;
    font-size: 0.8rem;
    /* text-transform: uppercase; */
    letter-spacing: 0.1rem;
    background-color: ${props =>
      props.isActive ? Colors.basic : "transparent"};
    transition-property: background-color, color;
    transition-duration: 0.3s;
    transition-timing-function: ease;

    &:hover {
      background-color: ${Colors.basic};
      color: ${Colors.navColor};
    }
  }
`

const LogoStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`

const PositionRelative = styled.div`
  position: relative;
`

const UlStyle = styled.ul`
  overflow: hidden;
`

const Navigation = ({ history }) => {
  const mapRourtes = Routes.map(item => {
    const isActive = history.pathname === item.link
    return (
      <LiStyle isActive={isActive} className="m-0" key={item.id}>
        <AniLinkCustom to={item.link}>{item.name}</AniLinkCustom>
      </LiStyle>
    )
  })
  return (
    <>
      <UpperNav>
        <div className="container">
          <a href="https://www.facebook.com/" target="__blank">
            <FaFacebook className="mr-2" />
          </a>
          <FaMobileAlt /> 666-196-075
        </div>
      </UpperNav>
      <NavStyle>
        <PositionRelative className="container">
          <LogoStyle>
            <img src={logo} alt="logo" />
          </LogoStyle>
          <UlStyle className="m-0 text-right">{mapRourtes}</UlStyle>
        </PositionRelative>
      </NavStyle>
    </>
  )
}
export default Navigation
