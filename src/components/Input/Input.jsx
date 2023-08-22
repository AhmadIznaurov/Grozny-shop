import React from 'react'
import styled from 'styled-components';
import { AddAdvertisement } from '../../Pages/AddAdvertisement'


const StyledInput = styled.input`
    width: ${props => props.width || '800px'};
    padding: 8px;
    border-radius: 8px;
    border: 0.5px solid gray;
    color: white;
    background-color: #9b9494;
    font-weight: bold;
  
 &::-webkit-input-placeholder{
    color: white;
  }

   &:focus{
    outline: none;
  }
`


export const Input = (props) => {
  console.log(props.value)
  return (
    <div>
      <StyledInput
        type="text"
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  )
}

