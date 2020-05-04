/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
const Navigation = require("./src/components/navigation").default
const Footer = require("./src/components/footer").default
const Cookie = require("./src/components/cookie").default

exports.wrapPageElement = ({ element, props }) => {
  return (
    <>
      <Navigation history={props.location} />
      <Cookie />
      {element}
      <Footer />
    </>
  )
}
