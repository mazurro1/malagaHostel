import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import {
  Colors,
  AniLinkCustom,
  categoryItems,
  getCategoriesStringPath,
} from "../common"
import CustomBackgroundImageRoom from "../common/CustomBackgroundImageRoom"
import { FaAlignLeft } from "react-icons/fa"
import CalendarWithComponents from "../components/CalendarWithComponents"

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

  button {
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: ${Colors.second};
    color: ${Colors.basicText};
    font-size: 0.8rem;
    transition-property: background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    &:hover {
      background-color: ${Colors.secondDark};
    }
    span {
      padding-right: 10px;
      font-size: 0.9rem;
    }
  }
`

const ButtonPosition = styled.div`
  position: absolute;
  bottom: 10px;
  right: 30px;
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

const newData = graphql`
  {
    allContentfulRoom {
      nodes {
        title
        content {
          content
        }
        path
        roomGallery {
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
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

const AllRooms = ({ stateActiveData }) => {
  const [activeData, setActiveData] = useState({})
  const [calendarActive, setCalendarActive] = useState(false)
  const [checkData, setCheckData] = useState(true)
  const [activeDateButton, setActiveDateButton] = useState(true)
  const {
    allContentfulDisabledDate: { nodes: disabledDatas },
    allContentfulRoom: { nodes: rooms },
  } = useStaticQuery(newData)

  useEffect(() => {
    if (stateActiveData) {
      setActiveData(stateActiveData)
    }
    const categories = getCategoriesStringPath(disabledDatas, "path")
    const sortedItems = categoryItems(categories, disabledDatas)
    console.log(sortedItems)
  }, [])

  const handleChangeCalendarActive = () => {
    setCheckData(prevState => !prevState)
    setActiveDateButton(false)
  }

  const handleClickConfirm = () => {
    setCalendarActive(false)
    setCheckData(false)
    setTimeout(() => {
      setActiveDateButton(true)
    }, 1000)
    // navigate("/rooms", {
    //   state: { activeData },
    // })
  }

  const handleResetDate = () => {
    setActiveData({})
  }

  const handleGoBack = () => {
    setCalendarActive(false)
    setActiveData({})
    setTimeout(() => {
      setActiveDateButton(true)
    }, 1000)
  }

  const handleClickDelete = () => {
    setActiveDateButton(false)
    setTimeout(() => {
      setActiveData({})
    }, 1000)
  }

  const disabledButtonConfirm =
    activeData.start && activeData.end ? true : false

  const mapRooms = rooms.map((item, index) => {
    return (
      <div className="col-12 mb-4" key={index}>
        <CardRoom>
          <div className="row">
            <UpperImageDiv className="col-lg-5 col-xl-4 col-12">
              <StyleBackgroundImage img={item.roomGallery[0].fluid} />
            </UpperImageDiv>
            <div className="col-lg-7 col-xl-8 col-12">
              <ContentText>
                <h2>{item.title}</h2>
                <div className="line" />
                <p>{item.content.content}</p>
                <ButtonPosition>
                  <AniLinkCustom to={item.path}>
                    <button>
                      <span>
                        <FaAlignLeft />
                      </span>
                      Więcej opisu
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
          activeData.start.getMonth() + 1
        }-${activeData.start.getDate()} - ${activeData.end.getFullYear()}-${
          activeData.end.getMonth() + 1
        }-${activeData.end.getDate()}`
      : ""

  return (
    <PositionRelative className="container">
      <SearchCalendarDiv>
        <CalendarWithComponentsStyle
          handleGoBack={handleGoBack}
          handleResetDate={handleResetDate}
          handleClickConfirm={handleClickConfirm}
          handleChangeCalendarActive={handleChangeCalendarActive}
          checkData={checkData}
          calendarActive={calendarActive}
          activeData={activeData}
          setActiveData={setActiveData}
          setCalendarActive={setCalendarActive}
          setCheckData={setCheckData}
          disabledButtonConfirm={disabledButtonConfirm}
          dateValue={dateValue}
          activeDateButton={activeDateButton}
          handleClickDelete={handleClickDelete}
        />
      </SearchCalendarDiv>

      <div>{mapRooms}</div>
    </PositionRelative>
  )
}
export default AllRooms
