import React from 'react'
import { Menu } from './Menu'
import { Navigation } from './Navigation'
import styled from 'styled-components';

type buttonB = {
    color: string
    text: string
    width: number
}

const StyledHeader = styled.div`
  background-color: #292929;
  padding: 2px 0 2px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Header: React.FC<buttonB> = ({color, width, text}) => {
  return (
    <StyledHeader>
      <Menu />
      <Navigation  color={color} text={text} width={width}/>
    </StyledHeader>
  )
}

