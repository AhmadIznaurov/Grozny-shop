import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'


interface ButtonProps {
    icon: string
    onSubmit: () => void
    text: string
    propTypes: number
    width: number
    color: string
}

const StyledButton = styled.button`
  background-color: #011765;
  width: ${props => props.width}; 
  border-radius: 10px;
  padding: ${props => props.padding || '10px'};
  text-align: ${props => props.align || 'center'};
  border: none;
  color: ${props => props.color};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.fontSize};
`



export const Button: React.FC<ButtonProps>  = (props) => {
  return (
   <StyledButton {...props} onClick={props.onSubmit}>
     <img src={props.icon} alt=""/>
     <span className='text-button'>
       {props.text}
     </span>
     </StyledButton>
  )
}

Button.propTypes = {
  text: propTypes.string.isRequired,
  icon: propTypes.string,
  onSubmit: propTypes.func,
  color: propTypes.string.isRequired,
  width: propTypes.number.isRequired,
}