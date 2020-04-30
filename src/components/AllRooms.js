import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import {
  Colors,
  AniLinkCustom,
  categoryItems,
  getCategoriesString,
  filterActiveAndNoActiveRooms,
} from "../common"
import CustomBackgroundImageRoom from "../common/CustomBackgroundImageRoom"
import { FaAlignLeft } from "react-icons/fa"
import { IoMdInformationCircleOutline } from "react-icons/io"
import CalendarWithComponents from "../components/CalendarWithComponents"
import sal from "sal.js"
import ReactTooltip from "react-tooltip"

const UpperImageDiv = styled.div`
  @media all and (max-width: 991px) {
    padding-right: 19px;
  }
`

const CardRoom = styled.div`
  /* background-color: #e0e0e0; */
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  background-color: white;
  @media all and (max-width: 991px) {
    max-width: 480px;
    margin: 0 auto;
  }
`

const StyleBackgroundImage = styled(CustomBackgroundImageRoom)`
  margin: 2px;

  ::before {
    @media all and (min-width: 992px) {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    @media all and (max-width: 991px) {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }
`

const ContentText = styled.div`
  padding-bottom: 50px;
  @media all and (max-width: 991px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  h2 {
    font-size: 1.2rem;
    color: ${Colors.basic};
    margin-top: 20px;
    margin-bottom: 15px;
    padding-right: 230px;
    line-height: 1.5rem;
    @media all and (max-width: 991px) {
      padding-right: 0px;
    }
  }
  .line {
    height: 2px;
    width: 100px;
    background-color: ${Colors.second};
    margin-bottom: 20px;
    border-radius: 10px;
  }
  p {
    font-size: 0.85rem;
    padding-right: 20px;
  }

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
    transition-property: background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    &:hover {
      background-color: ${Colors.secondDark};
    }
  }

  .afterSeason {
    position: relative;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: #ff5722;
    color: ${Colors.basicText};
    font-size: 0.8rem;
    transition-property: background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    &:hover {
      background-color: ${Colors.secondDark};
    }
    /* span {
      padding-right: 10px;
      font-size: 0.9rem;
    } */
  }

  .more {
    position: relative;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: ${Colors.basicLight};
    color: ${Colors.basicText};
    font-size: 0.8rem;
    transition-property: background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    &:hover {
      background-color: ${Colors.secondDark};
    }
    /* span {
      padding-right: 10px;
      font-size: 0.9rem;
    } */
  }
`

const ButtonPosition = styled.div`
  position: absolute;
  bottom: 10px;
  right: 30px;
`

const ButtonPricePosition = styled.div`
  position: absolute;
  top: 15px;
  right: 30px;

  @media all and (max-width: 991px) {
    position: relative;
    top: 0%;
    right: 0;
    margin-bottom: 15px;
  }
`

const SearchCalendarDiv = styled.div`
  position: absolute;
  z-index: 50;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`

const PositionRelative = styled.div`
  position: relative;
  padding-top: 140px;
`

const CalendarWithComponentsStyle = styled(CalendarWithComponents)`
  position: absolute;
  top: 0;
`

const OtherRooms = styled.div`
  background-color: ${Colors.basicLight};
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5) inset;

  h1 {
    font-size: 1.5rem;
    color: white;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: ${Colors.basicDark};
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5) inset;
  }
`

const NormalRooms = styled.div`
  h1 {
    font-size: 1.5rem;
    color: white;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: ${Colors.basicDark};
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5) inset;
  }
`

const NoScroll = styled.div`
  overflow: hidden;
`

const newData = graphql`
  query AllRooms {
    allContentfulRoom {
      nodes {
        title
        content {
          content
        }
        seasonPrice
        afterSeasonPrice
        path
        roomGallery {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    allContentfulDisabledDate {
      nodes {
        start
        end
        room {
          path
        }
      }
    }
  }
`

const AllRooms = ({ stateActiveData, roomsInfo }) => {
  const [actualCalendarDate, setActualCalendarDate] = useState({})
  const [activeData, setActiveData] = useState({})
  const [calendarActive, setCalendarActive] = useState(false)
  const [checkData, setCheckData] = useState(true)
  const [activeDateButton, setActiveDateButton] = useState(true)
  const [busyRooms, setBusyRooms] = useState([])
  const [noBusyRooms, setNoBusyRooms] = useState([])

  const {
    allContentfulDisabledDate: { nodes: disabledDatas },
    allContentfulRoom: { nodes: rooms },
  } = useStaticQuery(newData)

  useEffect(() => {
    sal({
      threshold: 0.1,
      once: true,
    })
  }, [busyRooms, noBusyRooms, activeData])

  useEffect(() => {
    if (stateActiveData) {
      setActualCalendarDate(stateActiveData)
      setActiveData(stateActiveData)
    }
  }, [stateActiveData])

  useEffect(() => {
    if (activeData.start && activeData.end) {
      const categories = getCategoriesString(rooms, "path")
      const sortedItems = categoryItems(categories, disabledDatas, rooms)
      const {
        filterRoomsBusy,
        filterRoomsNoBusy,
      } = filterActiveAndNoActiveRooms(activeData, sortedItems)
      if (filterRoomsBusy.length > 0) {
        setBusyRooms(filterRoomsBusy)
      }
      if (filterRoomsNoBusy.length > 0) {
        setNoBusyRooms(filterRoomsNoBusy)
      }
    }
  }, [stateActiveData, activeData, disabledDatas, rooms])

  const handleChangeCalendarActive = () => {
    setCheckData(prevState => !prevState)
    setActiveDateButton(false)
  }

  const handleClickConfirm = () => {
    setCalendarActive(false)
    setCheckData(false)
    setActiveData(actualCalendarDate)
    setTimeout(() => {
      setActiveDateButton(true)
    }, 1000)
    // navigate("/rooms", {
    //   state: { activeData },
    // })
  }

  const handleResetDate = () => {
    setActiveData({})
    setActualCalendarDate({})
    setBusyRooms([])
    setNoBusyRooms([])
  }

  const handleGoBack = () => {
    if (!activeData.start && !activeData.end) {
      setActualCalendarDate({})
    }
    setCalendarActive(false)
    setTimeout(() => {
      setActiveDateButton(true)
    }, 1000)
  }

  const handleClickDelete = () => {
    setActiveDateButton(false)
    setBusyRooms([])
    setNoBusyRooms([])
    setActualCalendarDate({})
    setTimeout(() => {
      setActiveData({})
    }, 1000)
  }

  const disabledButtonConfirm =
    actualCalendarDate.start && actualCalendarDate.end ? true : false

  let priceInSeason = false
  if (
    (activeData.start >= new Date(roomsInfo.dateStartSeason) &&
      activeData.start <= new Date(roomsInfo.dateEndSeason)) ||
    (activeData.end >= new Date(roomsInfo.dateStartSeason) &&
      activeData.end <= new Date(roomsInfo.dateEndSeason))
  ) {
    priceInSeason = true
  }

  const mapBusyRooms = busyRooms.map((item, index) => {
    const selectPrice = priceInSeason ? (
      <button className="season">
        <span className="icon">$</span>
        <span className="price">{item.otherContent.seasonPrice}</span>
      </button>
    ) : (
      <button className="afterSeason mr-2">
        <span className="icon">$</span>
        <span className="price">{item.otherContent.afterSeasonPrice}</span>
      </button>
    )

    return (
      <div
        className="col-12 mb-4"
        key={index}
        data-sal="slide-left"
        data-sal-duration="500"
        data-sal-easing="ease-out-bounce"
      >
        <CardRoom>
          <div className="row">
            <UpperImageDiv className="col-lg-5 col-xl-4 col-12">
              <StyleBackgroundImage
                img={item.otherContent.roomGallery[0].fluid}
              />
            </UpperImageDiv>
            <div className="col-lg-7 col-xl-8 col-12">
              <ContentText>
                <h2>{item.otherContent.title}</h2>
                <div className="line" />
                {selectPrice ? (
                  <ButtonPricePosition>
                    {selectPrice}
                    <span className="info" data-tip data-for="pricePerDay">
                      <IoMdInformationCircleOutline />
                    </span>
                  </ButtonPricePosition>
                ) : null}
                <p>{item.otherContent.content.content}</p>
                <ButtonPosition>
                  <Link
                    to={item.category}
                    state={{
                      selectedDate: activeData,
                    }}
                  >
                    <button className="more">
                      <span className="readMoreIcon">
                        <FaAlignLeft />
                      </span>
                      {roomsInfo.buttonReadMoreText}
                    </button>
                  </Link>
                </ButtonPosition>
              </ContentText>
            </div>
          </div>
        </CardRoom>
      </div>
    )
  })

  const mapNoBusyRooms = noBusyRooms.map((item, index) => {
    const selectPrice = priceInSeason ? (
      <button className="season">
        <span className="icon">$</span>
        <span className="price">{item.otherContent.seasonPrice}</span>
      </button>
    ) : (
      <button className="afterSeason mr-2">
        <span className="icon">$</span>
        <span className="price">{item.otherContent.afterSeasonPrice}</span>
      </button>
    )

    return (
      <div
        className="col-12 mb-4"
        key={index}
        data-sal="slide-left"
        data-sal-duration="500"
        data-sal-easing="ease-out-bounce"
      >
        <CardRoom>
          <div className="row">
            <UpperImageDiv className="col-lg-5 col-xl-4 col-12">
              <StyleBackgroundImage
                img={item.otherContent.roomGallery[0].fluid}
              />
            </UpperImageDiv>
            <div className="col-lg-7 col-xl-8 col-12">
              <ContentText>
                <h2>{item.otherContent.title}</h2>
                <div className="line" />
                {selectPrice ? (
                  <ButtonPricePosition>
                    {selectPrice}
                    <span className="info" data-tip data-for="pricePerDay">
                      <IoMdInformationCircleOutline />
                    </span>
                  </ButtonPricePosition>
                ) : null}
                <p>{item.otherContent.content.content}</p>
                <ButtonPosition>
                  <AniLinkCustom to={item.category}>
                    <button className="more">
                      <span className="readMoreIcon">
                        <FaAlignLeft />
                      </span>
                      {roomsInfo.buttonReadMoreText}
                    </button>
                  </AniLinkCustom>
                </ButtonPosition>
              </ContentText>
            </div>
          </div>
        </CardRoom>
      </div>
    )
  })

  const allRooms = rooms.map((item, index) => {
    return (
      <div
        className="col-12 mb-4"
        key={index}
        data-sal="slide-left"
        data-sal-duration="500"
        data-sal-easing="ease-out-bounce"
      >
        <CardRoom>
          <div className="row">
            <UpperImageDiv className="col-lg-5 col-xl-4 col-12">
              <StyleBackgroundImage img={item.roomGallery[0].fluid} />
            </UpperImageDiv>
            <div className="col-lg-7 col-xl-8 col-12">
              <ContentText>
                <h2>{item.title}</h2>
                <div className="line" />
                <ButtonPricePosition>
                  <button className="afterSeason mr-2">
                    <span className="icon">$</span>
                    <span className="price">{item.afterSeasonPrice}</span>
                  </button>

                  <button className="season">
                    <span className="icon">$</span>
                    <span className="price">{item.seasonPrice}</span>
                  </button>
                  <span
                    className="info"
                    data-tip
                    data-for={`InfoPrice-${index}`}
                  >
                    <IoMdInformationCircleOutline />
                  </span>

                  <ReactTooltip id={`InfoPrice-${index}`} className="scale">
                    <div>
                      <button className="afterSeason mr-2">
                        <span className="icon">$</span>
                        <span className="price">{item.afterSeasonPrice}</span>
                      </button>
                      {roomsInfo.tooltipNoSeasonText}
                    </div>
                    <div>
                      <button className="season">
                        <span className="icon">$</span>
                        <span className="price">{item.seasonPrice}</span>
                      </button>
                      {roomsInfo.tooltipSeasonText}
                    </div>
                  </ReactTooltip>
                </ButtonPricePosition>
                <p>{item.content.content}</p>
                <ButtonPosition>
                  <AniLinkCustom to={item.path}>
                    <button className="more">
                      <span className="readMoreIcon">
                        <FaAlignLeft />
                      </span>
                      {roomsInfo.buttonReadMoreText}
                    </button>
                  </AniLinkCustom>
                </ButtonPosition>
              </ContentText>
            </div>
          </div>
        </CardRoom>
      </div>
    )
  })

  const dateValue =
    activeData.start && activeData.end
      ? `${activeData.start.getFullYear()}-${
          activeData.start.getMonth() + 1 < 10
            ? "0" + (activeData.start.getMonth() + 1)
            : activeData.start.getMonth() + 1
        }-${
          activeData.start.getDate() < 10
            ? "0" + activeData.start.getDate()
            : activeData.start.getDate()
        } - 
        ${activeData.end.getFullYear()}-${
          activeData.end.getMonth() + 1 < 10
            ? "0" + (activeData.end.getMonth() + 1)
            : activeData.end.getMonth() + 1
        }-${
          activeData.end.getDate() < 10
            ? "0" + activeData.end.getDate()
            : activeData.end.getDate()
        }`
      : ""
  const roomsToShow =
    busyRooms.length > 0 || noBusyRooms.length > 0 ? (
      <>
        <NormalRooms>
          <div className="container">
            <h1 className="mb-2 text-center">{roomsInfo.busyRoomsText}</h1>
            <div className="row mt-4">
              {busyRooms.length > 0 ? (
                mapBusyRooms
              ) : (
                <div className="col-12 text-center">
                  <h2>{roomsInfo.noAvaibleRoomsText}</h2>
                </div>
              )}
            </div>
          </div>
        </NormalRooms>
        {noBusyRooms.length > 0 ? (
          <OtherRooms>
            <div className="container pt-4">
              <h1 className="mb-2 text-center">{roomsInfo.noBusyRoomsText}</h1>
              <div className="row mt-4">
                {noBusyRooms.length > 0 ? (
                  mapNoBusyRooms
                ) : (
                  <div className="col-12 text-center">
                    <h2>{roomsInfo.noAvaibleRoomsText}</h2>
                  </div>
                )}
                <ReactTooltip id="pricePerDay" className="scale">
                  <span>{roomsInfo.tooltipPriceInfo}</span>
                </ReactTooltip>
              </div>
            </div>
          </OtherRooms>
        ) : null}
      </>
    ) : (
      <NormalRooms>
        <div className="container">
          <h1 className="mb-2 text-center">{roomsInfo.allRoomsText}</h1>
          <div className="row mt-4">{allRooms}</div>
        </div>
      </NormalRooms>
    )

  return (
    <NoScroll>
      <PositionRelative className="container mt-3">
        <SearchCalendarDiv>
          <CalendarWithComponentsStyle
            handleGoBack={handleGoBack}
            handleResetDate={handleResetDate}
            handleClickConfirm={handleClickConfirm}
            handleChangeCalendarActive={handleChangeCalendarActive}
            checkData={checkData}
            calendarActive={calendarActive}
            activeData={actualCalendarDate}
            setActiveData={setActiveData}
            setCalendarActive={setCalendarActive}
            setCheckData={setCheckData}
            disabledButtonConfirm={disabledButtonConfirm}
            dateValue={dateValue}
            activeDateButton={activeDateButton}
            handleClickDelete={handleClickDelete}
            setActualCalendarDate={setActualCalendarDate}
            isRooms
            textCheckDates={roomsInfo.selectDateText}
          />
        </SearchCalendarDiv>
      </PositionRelative>

      {roomsToShow}
    </NoScroll>
  )
}
export default AllRooms
