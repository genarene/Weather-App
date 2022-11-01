import React from 'react'
import styled from 'styled-components'


const Cards = ({image, name}) => {
  return (
    <Container>
      <StyledImage src={image} alt="Berlin, Germany" />
      <StyledTitle>{name}</StyledTitle>
    </Container>
  )
}

const Container = styled.div`
display: flex;
flex-direction:column ;
align-items:center ;
 
`

const StyledImage = styled.img`
width:11rem;
height:13rem ;
border-radius:20px;
object-fit:cover;
cursor: pointer;
margin-top:50px ;

 &:hover{
  transform: scale(1.1);
  transition: all 0.5s ease-out;
 box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
 
 }


`
const StyledTitle = styled.p`
 color:#211d5a ;
  font-weight:500;
   &:hover{
    color:#EB5464;
  transition: all 0.5s ease-out;
 cursor: pointer;
   }
`
export default Cards