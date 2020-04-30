import React, { useEffect } from "react"
import { Title } from "../common"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import sal from "sal.js"
import { FaCheckSquare } from "react-icons/fa"

const newData = graphql`
  {
    allContentfulPageHome {
      nodes {
        servicesText
        servicesParagraph {
          servicesParagraph
        }
        servicesList
      }
    }
  }
`

const TextServices = styled.span`
  font-size: 0.8rem;
`

const ServicesItems = styled.div`
  .icon {
    font-size: 1.5rem;
    color: #43a047;
    margin-right: 10px;
  }
`
const ServicesColor = styled.div`
  background-color: #eee;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2) inset;
`

const OurServices = () => {
  const {
    allContentfulPageHome: { nodes },
  } = useStaticQuery(newData)
  const home = nodes[0]
  useEffect(() => {
    sal({
      threshold: 0.5,
      once: true,
    })
  }, [])

  const mapServicesItems = home.servicesList.map((item, index) => {
    return (
      <div
        className="col-12 col-md-6 col-lg-4"
        key={index}
        data-sal={index % 2 ? "slide-left" : "slide-right"}
        data-sal-duration="500"
        data-sal-easing="ease-out-bounce"
      >
        <span className="icon">
          <FaCheckSquare />
        </span>
        <TextServices className="text">{item}</TextServices>
      </div>
    )
  })

  return (
    <ServicesColor>
      <div className="container pt-4 pb-4 mb-4">
        <div
          data-sal="zoom-in"
          data-sal-duration="500"
          data-sal-easing="ease-out-bounce"
        >
          <Title>{home.servicesText}</Title>
        </div>
        <p
          className="text-center"
          data-sal="slide-left"
          data-sal-duration="500"
          data-sal-easing="ease-out-bounce"
        >
          {home.servicesParagraph.servicesParagraph}
        </p>
        <ServicesItems className="mb-5">
          <div className="row">{mapServicesItems}</div>
        </ServicesItems>
      </div>
    </ServicesColor>
  )
}
export default OurServices
