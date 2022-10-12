import React from 'react'
import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi'
import  "../../index.css"


const Searchbar = () => {
    return (
        <StyledSearchbar>
            <SearchIcon>
                <BiSearch color='#b1b0b8' size="26px" fontWeight={"900"} />
               
            </SearchIcon>
   
            <Input type="text" placeholder="Search new place" />   
            
            </StyledSearchbar>
    )
}


const Input = styled.input`
background-color:white;
border:1px solid white;
border-radius: 0.5rem;
padding:1.3rem 4rem;
color:#b1b0b8;
font-size:16px;
font-weight:bold;
cursor: pointer;
`
const StyledSearchbar = styled.div`
position: relative; 
`
const SearchIcon =styled.div`
     position: absolute;
  top:1.19rem;
  left:1.7rem;
  cursor: pointer;
`

export default Searchbar
