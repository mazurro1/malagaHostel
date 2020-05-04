import React, { useState } from "react"
import styled from "styled-components"
import { Colors } from "../common"
import { CSSTransition } from "react-transition-group"

const CookiesDiv = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  min-height: 100px;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2000;
  color: white;

  .container {
    position: relative;
  }

  .buttonPosition {
    position: absolute;
    /* bottom: 10px; */
    right: 10px;
    button {
      background-color: ${Colors.second};
      color: white;
      border: none;
      border-radius: 5px;
      padding: 5px 40px;
      transition-property: background-color;
      transition-duration: 0.3s;
      transition-timing-function: ease;

      &:hover {
        background-color: ${Colors.secondDark};
      }
    }
  }
`

const Cookie = () => {
  const [acceptCookie, setAcceptCookie] = useState(true)
  return (
    <CSSTransition
      in={acceptCookie}
      timeout={300}
      classNames="alert"
      unmountOnExit
    >
      <CookiesDiv>
        <div className="container">
          {/* <ContentTextCookies>cookie</ContentTextCookies> */}
          <p>cookie</p>
          <div className="buttonPosition">
            <button
              onClick={() => {
                setAcceptCookie(false)
              }}
            >
              Acepta
            </button>
          </div>
        </div>
      </CookiesDiv>
    </CSSTransition>
  )
}
export default Cookie
