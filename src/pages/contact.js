import React, { useEffect } from "react"
import Layout from "../components/layout"
import ContactComponent from "../components/contactComponent"
import sal from "sal.js"

const Contact = props => {
  useEffect(() => {
    sal({
      threshold: 0.1,
      once: true,
    })
  }, [])
  return (
    <Layout>
      <div
        data-sal="zoom-in"
        data-sal-duration="500"
        data-sal-easing="ease-out-bounce"
      >
        <ContactComponent />
      </div>
    </Layout>
  )
}

export default Contact
