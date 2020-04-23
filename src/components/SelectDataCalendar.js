import React, { useState } from "react"
import SimpleReactCalendar from "simple-react-calendar"
import "./style/base_style.css"
import "./style/date_picker.css"
import styled from "styled-components"
import { Colors } from "../common"

const StyleSimpleReactCalendar = styled.div`
  transform: translate(0px, 0px) !important;
  opacity: 1;
  .date_picker {
    background-color: #fff;
    max-width: 500px;
    min-height: 430px;
    box-shadow: 0 0 35px 10px rgba(0, 0, 0, 0.2);
    opacity: 1;
  }

  .date_picker-week-day.is-selectable {
    /* transition-property: background-color, color;
    transition-duration: 0.3s;
    transition-timing-function: ease; */
    &:hover {
      background-color: ${Colors.second};
      color: white;
    }
  }

  .is-disabled {
    background-color: #e0e0e0 !important;
  }

  .is-selected {
    background-color: #e0e0e0;
    border: none !important;
  }

  .is-selected:hover {
    background-color: #e0e0e0 !important;
  }

  .date_picker-week-day.is-selectable:hover:not(.is-selected) {
    box-shadow: none;
  }

  .date_picker-week-day.is-selected.is-end_selection {
    background-color: #e0e0e0;
  }
  .date_picker-week-day.is-selected.is-start_selection {
    background-color: #e0e0e0;
  }

  .date_picker-week-day.is-selected::before {
    background-color: ${Colors.second} !important;
    box-shadow: none;
  }
  .date_picker-week-day.is-selected:hover::before {
    background-color: ${Colors.secondDark} !important;
    box-shadow: none;
  }

  .date_picker-header_button {
    transition-property: background-color, color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    background-color: ${Colors.basicDark};
    border: none;
    color: white !important;
    &:hover {
      background-color: ${Colors.basicLight};
    }
  }
  .date_picker-header_button.is-next:before,
  .date_picker-header_button.is-prev:before {
    color: white !important;
  }
`

const SelectDataCalendar = ({ activeData, setActiveData }) => {
  const data = new Date()
  const prevYeat = new Date(data.getFullYear(), data.getMonth(), data.getDate())
  const nextYear = new Date(
    data.getFullYear() + 1,
    data.getMonth(),
    data.getDate()
  )

  const disabledDatas = [
    {
      end: "2020-04-27T00:00:00.000Z",
      start: "2020-04-25T00:00:00.000Z",
    },
  ]

  const handleSelectedDate = (start, end) => {
    const newDate = {
      start: start,
      end: end,
    }
    setActiveData(newDate)
  }

  return (
    <StyleSimpleReactCalendar>
      <SimpleReactCalendar
        activeMonth={new Date()}
        blockClassName="date_picker"
        mode="range"
        maxDate={nextYear}
        minDate={prevYeat}
        selected={activeData}
        // disabledIntervals={disabledDatas}
        onSelect={({ start, end }) => handleSelectedDate(start, end)}
      />
    </StyleSimpleReactCalendar>
  )
}
export default SelectDataCalendar
