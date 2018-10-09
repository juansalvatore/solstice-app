import React from 'react'
import styled from 'styled-components'

const Line = () => <StyledLine />

export default Line

const StyledLine = styled.span`
  position: absolute;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 40px);
`
