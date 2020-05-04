import React, { useState } from "react"
import styled from "styled-components"
import { Colors, AniLinkCustom } from "../common"
import { CSSTransition } from "react-transition-group"

const PositionContent = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  min-height: 100px;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2001;
  color: white;

  .container {
    position: relative;
  }
`

const CookieText = styled.p`
  margin-top: 10px;
  font-size: 1rem;
`

const LerMas = styled.button`
  background-color: ${Colors.basicLight};
  &:hover {
    background-color: ${Colors.basicDark};
  }
`

const Accept = styled.button`
  background-color: ${Colors.second};
  &:hover {
    background-color: ${Colors.secondDark};
  }
`

const ButtonPosition = styled.div`
  position: absolute;
  bottom: 10px;
  right: 160px;
  button {
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 40px;
    transition-property: background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
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
      <PositionContent>
        <div className="container mb-5">
          <CookieText>
            Utilizamos cookies propias y de terceros para obtener datos
            estadísticos de la navegación de nuestros usuarios y mejorar
            nuestros servicios. Si continua utilizando nuestro sitio web, acepta
            el uso que hacemos de las coockies.
          </CookieText>
        </div>
        <ButtonPosition>
          <AniLinkCustom to="/cookie">
            <LerMas
              onClick={() => {
                setAcceptCookie(false)
              }}
            >
              LEER MÁS
            </LerMas>
          </AniLinkCustom>
          <Accept
            className="ml-2"
            onClick={() => {
              setAcceptCookie(false)
            }}
          >
            ACEPTAR
          </Accept>
        </ButtonPosition>
      </PositionContent>
    </CSSTransition>
  )
}
export default Cookie
