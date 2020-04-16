import React from "react"
import { Link } from "gatsby"

const Menu = () => (
  <nav
    style={{
      background: "#f2f2f2",
      paddingTop: "10px",
    }}
  >
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about/"> About</Link>
      </li>
      <li>
        <Link to="/services/">Services</Link>
      </li>
      <li>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </nav>
)

export default Menu
