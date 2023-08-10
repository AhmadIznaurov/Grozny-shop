import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const StyledButton = styled.button`
 background-color: blue;
 width: ${props => props.width}; 
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  border: none;
  color: ${props => props.color}
`

export const Button = (props) => {
  return (
   <StyledButton {...props}>
     {props.text}
     </StyledButton>
  )
}

Button.propTypes = {
  text: propTypes.string
}