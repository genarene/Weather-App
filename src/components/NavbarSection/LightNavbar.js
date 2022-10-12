import React from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown'
import Searchbar from './Searchbar'

const LightNavbar = () => {
    return (
        <StyledNavbar>
            <Searchbar/>
           <Dropdown/>
        </StyledNavbar>
    )
}

const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  `

export default LightNavbar
