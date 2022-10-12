import React from 'react'
import styled from 'styled-components'
import ProfilePic from '../../assets/images/profile-pic.jpg'

const DarkNavbar = () => {
    return (
        <Container>
            <Notifications> Notifications <DynamicSpan>4</DynamicSpan></Notifications>
            <PlacesSection>Places</PlacesSection> 
                <ProfileImg src={ProfilePic} alt="moon" /> 
        </Container>
    )
}

const Container = styled.div`
    display:flex;
   align-items:center;
   padding:0 2rem ;
    
`
const DynamicSpan= styled.span`
    background-color:#EB5464;
    padding: 0.7rem 0.95rem;
    border-radius:10px ;
    font-weight:bold;
    margin-left:0.6rem;
`
const Notifications =styled.div`
     margin-left:2rem;
  font-weight: 800;
 font-family:Arial, Helvetica, sans-serif;
 font-size: 18px;
`

const PlacesSection =styled.div`
     margin-left: 2.9rem;
   font-weight: 800;
 font-family:Arial, Helvetica, sans-serif;
 font-size: 18px;
`

const ProfileImg =styled.img`
     margin-left: 9rem;
   width: 100px;
   height: 100px;
   border-radius: 10px;
  object-fit: cover;
`

export default DarkNavbar
