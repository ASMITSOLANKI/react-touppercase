import React from 'react'

import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
    <h1>hello i am a navbar</h1>
    <h2>{props.name}</h2>
    <h2>main heading not but title name is{props.title}</h2>
    <p>{props.num}</p>
    <p>{props.state}</p>
    </>
  )
}

Navbar.propTypesropTypes={
  title:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  number:PropTypes.number.isRequired
}

Navbar.defaultProps={
  title:"i am title here",
  state:"from canada"
}