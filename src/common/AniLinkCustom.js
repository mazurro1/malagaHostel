import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Colors } from "./consts"

export const AniLinkCustom = ({ children, to, state }) => {
  return (
    <AniLink paintDrip to={to} hex={Colors.basicDark} state>
      {children}
    </AniLink>
  )
}
