import React from "react"
import { Title, Colors, useTextLanguages } from "../common"
import styled from "styled-components"
import {
  FaMobileAlt,
  FaEnvelope,
  FaCity,
  FaRoad,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"

const newData = graphql`
  query ContactComponent {
    contentfulPageContact {
      title
      paragraph {
        paragraph
      }
      adressCity
      adressOther
      phonesNumber
      emailAdress
      instagramLink
      facebookLink
      adressText
      emailText
      phoneText
    }

    allContentfulPageContactOtherLanguages {
      nodes {
        language
        title
        paragraph {
          paragraph
        }
        adressText
        phoneText
        emailText
      }
    }
  }
`

const SocialIcons = styled.div`
  .facebook {
    color: #3b5998;
  }

  .instagram {
    color: ${Colors.second};
  }

  button {
    border: none;
    font-size: 2rem;
    background-color: transparent;
    margin: 0 20px;
    margin-bottom: 20px;
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    &:hover {
      transform: scale(1.5);
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

const ContactComponent = props => {
  const {
    contentfulPageContact,
    contentfulPageContact: {
      adressCity,
      adressOther,
      phonesNumber,
      emailAdress,
      instagramLink,
      facebookLink,
    },
    allContentfulPageContactOtherLanguages: { nodes: languages },
  } = useStaticQuery(newData)
  const allLanguages = useTextLanguages(contentfulPageContact, languages)

  return (
    <ContactStyles className="container">
      <Title>{allLanguages[props.language].title}</Title>
      <p className="text-center mb-4">
        {allLanguages[props.language].paragraph.paragraph}
      </p>
      <div className="row">
        <SocialIcons className="col-12 text-center">
          <a href={facebookLink} target="__blank">
            <button className="facebook">
              <FaFacebook />
            </button>
          </a>
          <a href={instagramLink} target="__blank">
            <button className="instagram">
              <FaInstagram />
            </button>
          </a>
        </SocialIcons>
        <div className="col-12 col-xl-4 col-lg-6 mx-auto">
          <div className="cardItem">
            <h3>{allLanguages[props.language].adressText}</h3>
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
            <h3>{allLanguages[props.language].phoneText}</h3>
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
            <h3>{allLanguages[props.language].emailText}</h3>
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

const mapStateToProps = ({ language, indexLanguage }) => {
  return { language, indexLanguage }
}

export default connect(mapStateToProps, {})(ContactComponent)
