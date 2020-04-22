import React from "react"
import "./bootstrap.min.css"
import styled from "styled-components"
import Header from "./header"
import "./layout.css"
import MessengerCustomerChat from "react-messenger-customer-chat"

const ContentWrapper = styled.div`
  margin-bottom: 80px;
  min-height: calc(60vh - 186px);
  padding-top: 2rem;
`

const StyledIframe = styled.iframe`
  width: 100%;
  height: calc(40vh);
  margin-bottom: -7px;
`

const Layout = ({ children, home, img, contentHeader }) => {
  return (
    <>
      {img ? (
        <Header home={home} img={img}>
          {contentHeader}
        </Header>
      ) : (
        <StyledIframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43023.83303290027!2d-4.210323112437342!3d36.72819221757806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7245797f646e65%3A0x205f57339afd4178!2sHostal%20La%20Estaci%C3%B3n!5e0!3m2!1spl!2spl!4v1587566833288!5m2!1spl!2spl"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        ></StyledIframe>
      )}
      <ContentWrapper>
        {children}
        <div>
          <MessengerCustomerChat
            pageId="109616830550928"
            appId="224093935318863"
          />
        </div>
      </ContentWrapper>
    </>
  )
}
export default Layout
