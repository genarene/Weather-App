import React from 'react'
import styled from 'styled-components'
import ProfilePic from '../../assets/images/profile-pic.jpg'

const DarkNavbar = () => {
    return (
        <Container>
            <Notifications> Notifications <DynamicSpan>4</DynamicSpan></Notifications>
            <PlacesSection>Places</PlacesSection> 
            <ProfileDiv>
                <ProfileImg src={ProfilePic} alt="moon" /> <RedDot/>
        </ProfileDiv>
                
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
    padding: 0.3rem 0.6rem;
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
const ProfileDiv = styled.div`
    position: relative;
    padding:1rem 0;
    cursor: pointer;
`
const ProfileImg =styled.img`
     margin-left: 9rem;
   width: 70px;
   height: 70px;
   border-radius: 10px;
  object-fit: cover;
`
const RedDot = styled.div`
   background-color:#EB5464;
   width:1rem;
   height:1rem;
   border-radius:50% ;
   position: absolute;
   top:0.8rem;
   left:12.8rem ;
`
export default DarkNavbar
