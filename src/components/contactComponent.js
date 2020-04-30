import React from "react"
import { Title, Colors } from "../common"
import styled from "styled-components"
import { FaMobileAlt, FaEnvelope, FaCity, FaRoad } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"

const newData = graphql`
  {
    contentfulPageContact {
      title
      paragraph {
        paragraph
      }
      adressCity
      adressOther
      phonesNumber
      emailAdress
    }
  }
`

const ContactStyles = styled.div`
  h3 {
    letter-spacing: 0.1rem;
    text-align: center;
  }
  p {
    text-align: center;
    margin-bottom: 5px;
  }

  .icon {
    font-size: 1.2rem;
    margin-right: 10px;
    color: #212121;
  }

  .content {
    letter-spacing: 0.1rem;
  }

  .cardItem {
    background-color: #eee;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 20px;
    min-height: 200px;
  }
  .marginParagraph {
    margin-top: 40px;
  }
`

const Line = styled.div`
  height: 2px;
  width: 50px;
  background-color: ${Colors.secondDark};
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 10px;
`

const ContactComponent = () => {
  const {
    contentfulPageContact: {
      title,
      paragraph,
      adressCity,
      adressOther,
      phonesNumber,
      emailAdress,
    },
  } = useStaticQuery(newData)
  return (
    <ContactStyles className="container">
      <Title>{title}</Title>
      <p className="text-center mb-4">{paragraph.paragraph}</p>
      <div className="row">
        <div className="col-12 col-xl-4 col-lg-6 mx-auto">
          <div className="cardItem">
            <h3>ADDRESS:</h3>
            <Line />
            <p>
              <span className="icon">
                <FaCity />
              </span>
              <span className="content">{adressCity}</span>
            </p>
            <p>
              <span className="icon">
                <FaRoad />
              </span>
              <span className="content">{adressOther}</span>
            </p>
          </div>
        </div>
        <div className="col-12 col-xl-4 col-lg-6  mx-auto">
          <div className="cardItem">
            <h3>PHONES:</h3>
            <Line />
            <p className="marginParagraph">
              <span className="icon">
                <FaMobileAlt />
              </span>
              <span className="content">{phonesNumber}</span>
            </p>
          </div>
        </div>
        <div className="col-12 col-xl-4 col-lg-6  mx-auto">
          <div className="cardItem">
            <h3>E-MAIL:</h3>
            <Line />
            <p className="marginParagraph">
              <span className="icon">
                <FaEnvelope />
              </span>
              <span className="content">{emailAdress}</span>
            </p>
          </div>
        </div>
      </div>
    </ContactStyles>
  )
}
export default ContactComponent
