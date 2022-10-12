import React from 'react'
import styled from 'styled-components'
import {IoIosArrowDown} from 'react-icons/io'

const Dropdown = () => {
    return (
    
        <StyledDropdown>
            <DropdownText>All Places</DropdownText>
                <IoIosArrowDown color='#110E3c'/>
            </StyledDropdown>
        
    )
}


const StyledDropdown = styled.div`
position:relative;
left:2rem ;
display:flex;
justify-items:center;
align-items:center ;
cursor: pointer;
`
const DropdownText = styled.p`
color: #110E3C;
font-size:16px;
font-weight:400;
padding-right: 0.75rem
`

export default Dropdown
