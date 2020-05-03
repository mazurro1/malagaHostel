import React, { useState } from "react"
import styled from "styled-components"
import { Colors, Routes, AniLinkCustom } from "../common"
import { FaMobileAlt, FaFacebook, FaInstagram } from "react-icons/fa"
import { slide as Menu } from "react-burger-menu"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { connect } from "react-redux"

const newData = graphql`
  query Navigation {
    contentfulPageContact {
      phonesNumber
      instagramLink
      facebookLink
    }
    esp: file(name: { eq: "esp" }) {
      childImageSharp {
        fixed(height: 20, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    pol: file(name: { eq: "pol" }) {
      childImageSharp {
        fixed(height: 20, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ru: file(name: { eq: "ru" }) {
      childImageSharp {
        fixed(height: 20, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    uk: file(name: { eq: "uk" }) {
      childImageSharp {
        fixed(height: 20, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const NavStyle = styled.nav`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props =>
    props.navTransparent ? "rgba(255,255,255,0.3)" : Colors.navColor};
  border-bottom: 1px solid
    ${props => (props.navTransparent ? "transparent" : Colors.basic)};
  transition-property: background-color, border-bottom;
  transition-duration: 0.3s;
  transition-timing-function: ease;
`
const UpperNav = styled.div`
  position: relative;
  top: 0;
  background-color: ${Colors.basicDark};
  /* text-align: right; */
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
  @media all and (max-width: 991px) {
    width: 100%;
  }

  a {
    color: ${props =>
      props.isActive
        ? props.navTransparent
          ? "white"
          : Colors.navColor
        : props.navTransparent
        ? Colors.basicDark
        : Colors.navText};
    padding: 32px 20px;
    font-size: 0.7rem;
    letter-spacing: 0.1rem;
    background-color: ${props =>
      props.isActive
        ? props.navTransparent
          ? `transparent`
          : Colors.basic
        : "transparent"};
    transition-property: background-color, color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    width: 100%;
    font-weight: 700;
    &:hover {
      background-color: ${props =>
        props.navTransparent ? "transparent" : Colors.basic};
      color: ${props =>
        props.navTransparent ? Colors.second : Colors.navColor};
    }
  }
`

const LogoStyle = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  color: ${Colors.second};
  font-weight: 700;
  line-height: 1.5rem;
  font-size: 1.5rem;
  transition-property: color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  &:hover {
    color: ${Colors.secondDark};
  }

  span {
    display: block;
    letter-spacing: 0.25rem;
  }

  img {
    height: 77px;
  }
`

const PositionRelative = styled.div`
  position: relative;
`

const UlStyle = styled.ul`
  overflow: hidden;
`

const HeightMenu = styled.div`
  height: 77px;
`

const AniLinkCustomStyle = styled(AniLinkCustom)`
  width: 100%;
`

const ButtonMobile = styled.div`
  background-color: ${props =>
    props.isActive ? Colors.basicLight : Colors.basic};
  padding: 10px 20px;
  margin-bottom: 10px;
  color: white;
  text-align: center;
  border-radius: 5px;
  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
`

const ButtonCountry = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
  margin: 5px;
  margin-bottom: 0px;
  filter: ${props => (props.isActive ? "grayscale(0%)" : "grayscale(80%)")};
  transition-property: filter;
  transition-duration: 0.3s;
  transition-timing-function: ease;
`

const Navigation = props => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [navTransparent, setNavTransparent] = useState(true)
  const transparentNoContact = props.history.pathname.includes("/contact")
    ? false
    : navTransparent
  const {
    esp,
    pol,
    ru,
    uk,
    contentfulPageContact: { phonesNumber, instagramLink, facebookLink },
  } = useStaticQuery(newData)
  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y >= 0) {
      setNavTransparent(true)
    } else {
      setNavTransparent(false)
    }
  })

  const handleCloseMenu = () => {
    setMenuOpen(false)
  }

  var isMenuOpen = state => {
    setMenuOpen(state.isOpen)
  }

  const mapRourtes = Routes.map(item => {
    const isActive = props.history.pathname.includes("/room")
      ? "/rooms" === item.link
      : props.history.pathname.includes("/area")
      ? "/areas" === item.link
      : props.history.pathname === item.link

    const transparentNoContact = props.history.pathname.includes("/contact")
      ? false
      : navTransparent

    return (
      <LiStyle
        isActive={isActive}
        navTransparent={transparentNoContact}
        className="m-0 "
        key={item.id}
      >
        <AniLinkCustom to={item.link}>{item.name.toUpperCase()}</AniLinkCustom>
      </LiStyle>
    )
  })

  const mapRourtesMobile = Routes.map(item => {
    const isActive = props.history.pathname.includes("/room")
      ? "/rooms" === item.link
      : props.history.pathname === item.link
    return (
      <AniLinkCustomStyle to={item.link} key={item.id}>
        <ButtonMobile isActive={isActive} onClick={handleCloseMenu}>
          {item.name.toUpperCase()}
        </ButtonMobile>
      </AniLinkCustomStyle>
    )
  })
  return (
    <>
      <NavStyle navTransparent={transparentNoContact}>
        <div id="outer-container" style={{ height: "100%" }}>
          <Menu
            isOpen={menuOpen}
            onStateChange={isMenuOpen}
            id="stack"
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          >
            {mapRourtesMobile}
          </Menu>
          <main id="page-wrap">
            <UpperNav>
              <div className="container">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <ButtonCountry
                      isActive={props.language === "ES"}
                      onClick={() => props.changeLanguage("ES", 0)}
                    >
                      <Img fixed={esp.childImageSharp.fixed} />
                    </ButtonCountry>

                    <ButtonCountry
                      isActive={props.language === "EN"}
                      onClick={() => props.changeLanguage("EN", 1)}
                    >
                      <Img fixed={uk.childImageSharp.fixed} />
                    </ButtonCountry>
                    <ButtonCountry
                      isActive={props.language === "PL"}
                      onClick={() => props.changeLanguage("PL", 2)}
                    >
                      <Img fixed={pol.childImageSharp.fixed} />
                    </ButtonCountry>
                    <ButtonCountry
                      isActive={props.language === "RU"}
                      onClick={() => props.changeLanguage("RU", 3)}
                    >
                      <Img fixed={ru.childImageSharp.fixed} />
                    </ButtonCountry>
                  </div>
                  <div className="col-12 col-sm-6 text-right">
                    <a href={facebookLink} target="__blank">
                      <FaFacebook className="mr-2" />
                    </a>
                    <a href={instagramLink} target="__blank">
                      <FaInstagram className="mr-2" />
                    </a>
                    <FaMobileAlt /> {phonesNumber}
                  </div>
                </div>
              </div>
            </UpperNav>
            <PositionRelative className="container">
              <AniLinkCustom to="/">
                <LogoStyle navTransparent={transparentNoContact}>
                  {/* <img src={logo} alt="logo" /> */}
                  Hostal Cafeteria <span>LA ESTACION</span>
                </LogoStyle>
              </AniLinkCustom>
              <HeightMenu>
                <UlStyle className="m-0 text-right d-none d-lg-block">
                  {mapRourtes}
                </UlStyle>
              </HeightMenu>
            </PositionRelative>
          </main>
        </div>
      </NavStyle>
    </>
  )
}

const mapStateToProps = ({ language, indexLanguage }) => {
  return { language, indexLanguage }
}

const mapDispatchToProps = dispatch => {
  return {
    changeLanguage: (language, indexLanguage) =>
      dispatch({
        type: `CHANGE_LANGUAGE`,
        language: language,
        indexLanguage: indexLanguage,
      }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
