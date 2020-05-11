import React, { useState } from "react"
import styled from "styled-components"
import { Colors, AniLinkCustom } from "../common"
import { CSSTransition } from "react-transition-group"
import { FaAngleUp } from "react-icons/fa"

const PositionContent = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  min-height: 100px;
  width: 100vw;
  background-color: transparent;
  z-index: 1999;
  color: white;

  .container {
    position: relative;
    margin-bottom: 70px;
    @media all and (max-width: 575px) {
      margin-bottom: 100px;
    }
  }
`

const Accept = styled.button`
  background-color: ${Colors.second};
  border-radius: 50%;
  &:hover {
    background-color: ${Colors.secondDark};
  }
`

const ButtonPosition = styled.div`
  position: absolute;
  bottom: 10px;
  right: 160px;
  button {
    margin: 5px;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 2rem;
    padding: 0px 12px;
    padding-bottom: 5px;
    transition-property: background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  }
`

const GoUp = () => {
  const handleGoUp = () => {
    window.scrollTo(0, 0)
  }

  return (
    <PositionContent>
      <ButtonPosition onClick={handleGoUp}>
        <Accept>
          <FaAngleUp />
        </Accept>
      </ButtonPosition>
    </PositionContent>
  )
}
export default GoUp
