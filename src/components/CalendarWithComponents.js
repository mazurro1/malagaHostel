import React from "react"
import SelectDataCalendar from "../components/SelectDataCalendar"
import { CSSTransition } from "react-transition-group"
import { FaCalendarTimes, FaSearch, FaCalendarAlt } from "react-icons/fa"
import { MdClose } from "react-icons/md"
import styled from "styled-components"
import { Colors } from "../common"

const AllDeleteDiv = styled.div`
  position: relative;
  top: 55px;
  margin-top: 2px;
  margin-bottom: -20px;
  height: 18px;
  transition-property: transform, opacity;
  transition-duration: 0.3s;
  transition-timing-function: ease;
`

const DateDivFilter = styled.div`
  position: relative;
  border: none;
  border-radius: 5px;
  background-color: ${Colors.secondDark};
  width: 220px;
  margin: 0 auto;
  color: white;
  padding: 5px 20px;
  font-size: 0.75rem;
  font-weight: 600;
  overflow: hidden;
  cursor: default;
`

const DeleteDate = styled.div`
  position: absolute;
  cursor: pointer;
  height: 100%;
  width: 30px;
  top: 0;
  right: 0;
  background-color: ${Colors.second};
  border-radius: 5px;
  text-align: center;
  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
  &:hover {
    background-color: ${Colors.secondDark};
  }
  svg {
    position: relative;
    top: 4px;
    font-size: 1.3rem;
  }
`

const DateButtons = styled.button`
  border-radius: 50%;
  border: none;
  padding: 5px 10px;
  margin: 10px 20px;
  background-color: ${props =>
    props.colorSecond ? Colors.second : Colors.basicDark};
  color: ${Colors.basicText};
  transition-property: background-color, color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  &:disabled {
    background-color: #e0e0e0;
    &:hover {
      background-color: #e0e0e0;
    }
  }
  &:hover {
    background-color: ${props =>
      props.colorSecond ? Colors.secondDark : Colors.basicLight};
  }
`

const AllButtons = styled.div`
  position: relative;
  top: -60px;
`

const StyleAnimation = styled.div`
  position: relative;
  opacity: 1;
  transition-property: opacity, transform;
  transition-duration: 0.3s;
  transition-timing-function: ease;
`

const FirstButton = styled.button`
  position: relative;
  border: none;
  border-radius: 5px;
  background-color: ${props =>
    props.firstColor ? Colors.second : Colors.basic};
  padding: 15px;
  padding-top: 12px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  padding-right: 65px;
  overflow: hidden;
  span {
    font-size: 1.4rem;
    padding-left: 30px;
  }
  &:hover {
    transform: scale(1.2) translateY(-5px);
  }
`

const ButtonIcon = styled.div`
  position: absolute;
  right: 0%;
  top: 0;
  height: 100%;
  width: 50px;
  background-color: ${props =>
    props.firstColor ? Colors.secondDark : Colors.basicDark};
  border-radius: 5px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
  svg {
    position: relative;
    top: 10px;
  }
`

const PositionRelative = styled.div`
  position: relative;
  text-align: center;
`

const CalendarWithComponents = ({
  handleGoBack,
  handleResetDate,
  handleClickConfirm,
  handleChangeCalendarActive,
  checkData,
  calendarActive,
  activeData,
  setActiveData,
  setCalendarActive,
  setCheckData,
  disabledButtonConfirm,
  dateValue,
  activeDateButton,
  handleClickDelete,
  setActualCalendarDate,
  firstColor = false,
  isRooms,
  textCheckDates = "Check dates",
  onlyWatch = true,
  activeMonth,
}) => {
  const buttonWithDate =
    dateValue.length > 0 ? (
      <DateDivFilter>
        {dateValue}
        <DeleteDate onClick={handleClickDelete ? handleClickDelete : () => {}}>
          <MdClose />
        </DeleteDate>
      </DateDivFilter>
    ) : (
      false
    )

  return (
    <>
      <CSSTransition
        in={activeDateButton}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        <AllDeleteDiv>{buttonWithDate}</AllDeleteDiv>
      </CSSTransition>
      <PositionRelative>
        <CSSTransition
          in={checkData}
          timeout={300}
          classNames="calendar"
          unmountOnExit
          onExited={() => setCalendarActive(true)}
        >
          <FirstButton
            onClick={handleChangeCalendarActive}
            firstColor={firstColor}
          >
            {textCheckDates}
            <ButtonIcon firstColor={firstColor}>
              <FaCalendarAlt />
            </ButtonIcon>
          </FirstButton>
        </CSSTransition>
        <CSSTransition
          in={calendarActive}
          timeout={300}
          classNames="calendar"
          unmountOnExit
          onExited={() => setCheckData(true)}
        >
          <StyleAnimation>
            <SelectDataCalendar
              activeData={activeData}
              setActualCalendarDate={setActualCalendarDate}
              isRooms={isRooms}
              onlyWatch={onlyWatch}
              activeMonth={activeMonth}
            />
            <AllButtons className="row">
              <div className="col-4 text-left">
                <DateButtons onClick={handleGoBack}>
                  <MdClose />
                </DateButtons>
              </div>
              <div className="col-8 text-right">
                <DateButtons
                  onClick={handleResetDate}
                  disabled={!disabledButtonConfirm}
                  className="mr-0"
                  colorSecond
                >
                  <FaCalendarTimes />
                </DateButtons>
                <DateButtons
                  onClick={handleClickConfirm}
                  disabled={!disabledButtonConfirm}
                >
                  <FaSearch />
                </DateButtons>
              </div>
            </AllButtons>
          </StyleAnimation>
        </CSSTransition>
      </PositionRelative>
    </>
  )
}
export default CalendarWithComponents
