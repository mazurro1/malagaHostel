/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
const Navigation = require("./src/components/navigation").default
const Cookie = require("./src/components/cookie").default
const Footer = require("./src/components/footer").default
const ButtonGoUp = require("./src/components/GoUp").default

exports.wrapPageElement = ({ element, props }) => {
  return (
    <>
      <Navigation history={props.location} />
      <Cookie />
      <ButtonGoUp />
      {element}
      <Footer />
    </>
  )
}
