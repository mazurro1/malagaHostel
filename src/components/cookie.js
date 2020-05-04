import React, { useState } from "react"
import styled from "styled-components"
import { Colors, AniLinkCustom } from "../common"
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

  .cookieText {
    margin-top: 10px;
    font-size: 1rem;
  }

  .lerMas {
    background-color: ${Colors.basicLight};
    &:hover {
      background-color: ${Colors.basicDark};
    }
  }

  .accept {
    background-color: ${Colors.second};
    &:hover {
      background-color: ${Colors.secondDark};
    }
  }

  .buttonPosition {
    position: absolute;
    bottom: 10px;
    right: 20px;
    button {
      color: white;
      border: none;
      border-radius: 5px;
      padding: 5px 40px;
      transition-property: background-color;
      transition-duration: 0.3s;
      transition-timing-function: ease;
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
          <p className="cookieText">
            Utilizamos cookies propias y de terceros para obtener datos
            estadísticos de la navegación de nuestros usuarios y mejorar
            nuestros servicios. Si continua utilizando nuestro sitio web, acepta
            el uso que hacemos de las coockies.
          </p>
        </div>
        <div className="buttonPosition">
          <AniLinkCustom to="/cookie">
            <button
              className="lerMas"
              onClick={() => {
                setAcceptCookie(false)
              }}
            >
              LEER MÁS
            </button>
          </AniLinkCustom>
          <button
            className="ml-2 accept"
            onClick={() => {
              setAcceptCookie(false)
            }}
          >
            ACEPTAR
          </button>
        </div>
      </CookiesDiv>
    </CSSTransition>
  )
}
export default Cookie
