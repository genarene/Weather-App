import React from 'react'
import styled from 'styled-components'
import {AiOutlinePlus} from 'react-icons/ai'

const CardOutline = () => {
  return (
      <Container>
          <AiOutlinePlus color='#110E3C' size="20px" />
           <AddTitle>Add City</AddTitle>
    </Container>
  )
}

const Container = styled.div`
display: flex;
flex-direction:column ;
justify-content:center ;
align-items:center ;
border-radius:20px;
border:1px solid #110E3C ;
width:11rem;
height:13rem ;
margin-top:50px ;
cursor: pointer;

&:hover{
background-color:#6f6abf;
border:1px solid #110E3C ;
transition:2s ease-out 

}
`
const AddTitle=styled.p`
    color:#211d5a ;
    font-weight:500;
`
export default CardOutline