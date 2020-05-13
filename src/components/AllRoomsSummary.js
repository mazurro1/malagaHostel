import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"
import styled from "styled-components"
import { Colors, Title } from "../common"
import { IoMdInformationCircleOutline } from "react-icons/io"
import ReactTooltip from "react-tooltip"
import { useStaticQuery, graphql } from "gatsby"

const newData = graphql`
  {
    contentfulPageSummaryAllLanguages {
      sendSummaryToThisEmail
      titleSummary
      dateText
      room
      priceText
      eMailText
      eMailPlaceholder
      numberPhoneText
      numberPhonePlaceholder
      buttonClose
      buttonSend
      tooltipEmailNumberRequired
      paragraph
    }
  }
`

const InputStyle = styled.input`
  letter-spacing: 1px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid ${Colors.basic};
  transition-property: border;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  ::placeholder {
    letter-spacing: 0;
    font-size: 0.7rem;
  }

  &:focus {
    outline: none;
    border: 1px solid ${Colors.second};
  }
  &:active {
    outline: none;
  }
`

const ButtonStyle = styled.div``

const DisplayLabels = styled.div`
  position: absolute;
  left: -1000%;
`

const PositionDisplayLabel = styled.div`
  position: relative;
  overflow: hidden;
`

const SummaryDiv = styled.div`
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

  .readMoreIcon {
    padding-right: 10px;
    font-size: 0.9rem;
  }

  .info {
    margin-left: 10px;
    font-size: 1.1rem;
  }

  .scale {
    button {
      transform: scale(0.7);
    }
  }

  .season {
    position: relative;
    border: none;
    border-radius: 5px;
    padding: 5px 15px;
    background-color: #2e7d32;
    color: ${Colors.basicText};
    font-size: 0.8rem;
  }

  .afterSeason {
    position: relative;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: #ff5722;
    color: ${Colors.basicText};
    font-size: 0.8rem;
  }

  .buttonsPosition {
    position: absolute;
    right: 10px;
  }

  .closeSummary {
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    color: white;
    background-color: ${Colors.basic};
    transition-property: background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    margin: 5px;

    &:hover {
      background-color: ${Colors.basicDark};
    }
  }

  .sendSummary {
    border: none;
    padding: 5px 10px;
    font-size: 1rem;
    border-radius: 5px;
    color: white;
    background-color: ${Colors.second};
    transition-property: background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    margin: 5px;

    &:hover {
      background-color: ${Colors.secondDark};
    }
  }

  .container {
    position: relative;
  }

  .cookieWindow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    padding-top: 50px;
  }

  .cookieContent {
    position: relative;
    background-color: white;
    min-height: 200px;
    max-height: 60vh;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    padding: 10px 20px;
    padding-bottom: 70px;
  }

  .title {
    display: inline-block;
    font-size: 1rem;
    margin-right: 20px;
    width: 350px;
    font-size: 0.9rem;
  }

  .result {
    display: inline-block;
    font-size: 0.9rem;
    margin-bottom: 20px;
    font-weight: 700;
  }

  fieldset {
    border: none;
    display: inline-block;
  }
`

const AllRoomsSummary = ({
  activeRoom,
  setShowSummary,
  showSummary,
  indexLanguage,
  validDates,
  languageText,
  dateValue,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [emailValidate, setEmailValidate] = useState(false)

  const { contentfulPageSummaryAllLanguages } = useStaticQuery(newData)

  const handleChangeEmail = e => {
    setEmail(e.target.value)
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
      setEmailValidate(true)
    } else {
      setEmailValidate(false)
    }
  }

  const handleChangePhoneNumber = e => {
    if (Number.isInteger(Number(e.target.value))) {
      setPhoneNumber(e.target.value)
    }
  }

  const handleCloseSummary = () => {
    setShowSummary(false)
  }

  const handleSendEmail = () => {}

  const priceToEmail = validDates.isSeasonAndNoSeason
    ? `${activeRoom.otherContent.afterSeasonPrice} - ${activeRoom.otherContent.seasonPrice}`
    : validDates.isSeason
    ? activeRoom.otherContent.seasonPrice
    : activeRoom.otherContent.afterSeasonPrice

  const selectPrice = (
    <>
      {validDates.isSeasonAndNoSeason ? (
        <>
          <button className="season mr-2">
            <span className="icon">€</span>
            <span className="price">{activeRoom.otherContent.seasonPrice}</span>
          </button>
          <span className="font-weight-bold">-</span>
          <button className="afterSeason ml-2">
            <span className="icon">€</span>
            <span className="price">
              {activeRoom.otherContent.afterSeasonPrice}
            </span>
          </button>
        </>
      ) : validDates.isSeason ? (
        <button className="season">
          <span className="icon">€</span>
          <span className="price">{activeRoom.otherContent.seasonPrice}</span>
        </button>
      ) : (
        <button className="afterSeason">
          <span className="icon">€</span>
          <span className="price">
            {activeRoom.otherContent.afterSeasonPrice}
          </span>
        </button>
      )}
    </>
  )

  const DisabledInputs = (
    <>
      <label>
        <input
          type="text"
          name="Pokój"
          value={activeRoom.otherContent.title[0]}
          onChange={handleSendEmail}
        />
      </label>
      <label>
        <input
          type="text"
          name="Data"
          value={dateValue}
          onChange={handleSendEmail}
        />
      </label>
      <label>
        <input
          type="text"
          name="Cena za dzień"
          value={priceToEmail}
          onChange={handleSendEmail}
        />
      </label>
      <label>
        <input
          type="text"
          name="E-mail"
          value={email}
          onChange={handleSendEmail}
        />
      </label>
      <label>
        <input
          type="text"
          name="Numer telefonu"
          value={phoneNumber}
          onChange={handleSendEmail}
        />
      </label>
    </>
  )

  return (
    <CSSTransition
      in={showSummary}
      timeout={500}
      classNames="summary"
      unmountOnExit
    >
      <SummaryDiv className="summaryClassDiv">
        <div className="cookieWindow">
          {/* <div className="container"> */}
          <div className="cookieContent">
            <div className="container">
              <Title width="100%">
                {contentfulPageSummaryAllLanguages.titleSummary[indexLanguage]}
              </Title>
              <p className="text-center">
                {contentfulPageSummaryAllLanguages.paragraph[indexLanguage]}
              </p>
              <form
                action={`https://formspree.io/${contentfulPageSummaryAllLanguages.sendSummaryToThisEmail}`}
                method="POST"
              >
                <div>
                  <div className="title">
                    {contentfulPageSummaryAllLanguages.room[indexLanguage]}
                  </div>
                  <div className="result">
                    {activeRoom.otherContent.title[indexLanguage]}
                  </div>
                </div>
                <div>
                  <div className="title">
                    {contentfulPageSummaryAllLanguages.dateText[indexLanguage]}
                  </div>
                  <div className="result">{dateValue}</div>
                </div>
                <div>
                  <div className="title">
                    {contentfulPageSummaryAllLanguages.priceText[indexLanguage]}
                  </div>
                  <div className="result">
                    {selectPrice ? (
                      <>
                        {selectPrice}
                        <span
                          className="info"
                          data-tip
                          data-for={"InfoPriceNoBusySummary"}
                        >
                          <IoMdInformationCircleOutline />
                        </span>
                        <ReactTooltip
                          id={`InfoPriceNoBusySummary`}
                          className="scale"
                        >
                          {validDates.isSeasonAndNoSeason ? (
                            <>
                              <div>
                                <button className="afterSeason mr-2">
                                  <span className="icon">€</span>
                                  <span className="price">
                                    {activeRoom.otherContent.afterSeasonPrice}
                                  </span>
                                </button>
                                {languageText.tooltipNoSeasonText}
                              </div>
                              <div>
                                <button className="season">
                                  <span className="icon">€</span>
                                  <span className="price">
                                    {activeRoom.otherContent.seasonPrice}
                                  </span>
                                </button>
                                {languageText.tooltipSeasonText}
                              </div>
                            </>
                          ) : validDates.isSeason ? (
                            <div>
                              <button className="season">
                                <span className="icon">€</span>
                                <span className="price">
                                  {activeRoom.otherContent.seasonPrice}
                                </span>
                              </button>
                              {languageText.tooltipSeasonText}
                            </div>
                          ) : (
                            <div>
                              <button className="afterSeason mr-2">
                                <span className="icon">€</span>
                                <span className="price">
                                  {activeRoom.otherContent.afterSeasonPrice}
                                </span>
                              </button>
                              {languageText.tooltipNoSeasonText}
                            </div>
                          )}
                        </ReactTooltip>
                      </>
                    ) : null}
                  </div>
                </div>
                <div>
                  <div className="title">
                    {contentfulPageSummaryAllLanguages.eMailText[indexLanguage]}
                  </div>
                  <div className="result">
                    <InputStyle
                      type="text"
                      placeholder={
                        contentfulPageSummaryAllLanguages.eMailPlaceholder[
                          indexLanguage
                        ]
                      }
                      value={email}
                      onChange={handleChangeEmail}
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="title">
                    {
                      contentfulPageSummaryAllLanguages.numberPhoneText[
                        indexLanguage
                      ]
                    }
                  </div>
                  <div className="result">
                    <InputStyle
                      type="text"
                      maxLength="9"
                      minLength="8"
                      placeholder={
                        contentfulPageSummaryAllLanguages
                          .numberPhonePlaceholder[indexLanguage]
                      }
                      value={phoneNumber}
                      onChange={handleChangePhoneNumber}
                      required
                    />
                  </div>
                </div>
                <PositionDisplayLabel>
                  <DisplayLabels>{DisabledInputs}</DisplayLabels>
                </PositionDisplayLabel>
                <div className="buttonsPosition">
                  <ButtonStyle className="text-center mt-4">
                    <button
                      className="closeSummary"
                      onClick={handleCloseSummary}
                    >
                      {
                        contentfulPageSummaryAllLanguages.buttonClose[
                          indexLanguage
                        ]
                      }
                    </button>
                    <fieldset disabled={!emailValidate}>
                      <button
                        type="submit"
                        value="Send"
                        className="sendSummary"
                      >
                        {
                          contentfulPageSummaryAllLanguages.buttonSend[
                            indexLanguage
                          ]
                        }
                      </button>
                      <span className="info" data-tip data-for={`emailInfo`}>
                        <IoMdInformationCircleOutline />
                      </span>
                    </fieldset>
                  </ButtonStyle>
                </div>
                <ReactTooltip id={`emailInfo`} className="scale">
                  <div>
                    {
                      contentfulPageSummaryAllLanguages
                        .tooltipEmailNumberRequired[indexLanguage]
                    }
                  </div>
                </ReactTooltip>
              </form>
            </div>
            {/* </div> */}
          </div>
        </div>
      </SummaryDiv>
    </CSSTransition>
  )
}
export default AllRoomsSummary
