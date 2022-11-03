import React from 'react'
import styled from 'styled-components'
import ProfilePic from '../../assets/images/profile-pic.jpg'

const DarkNavbar = () => {
    return (
        <Container>
            <Notifications> Notifications <DynamicSpan>4</DynamicSpan></Notifications>
            <ProfileDiv>
                <ProfileImg src={ProfilePic} alt="moon" /> <RedDot/>
        </ProfileDiv>
                
        </Container>
    )
}

const Container = styled.div`
    display:flex;
   align-items:center;
   justify-content:space-between ;
   padding:0 4rem ;
    
`
const DynamicSpan= styled.span`
    background-color:#EB5464;
    padding: 0.3rem 0.6rem;
    border-radius:10px ;
    font-weight:bold;
    margin-left:0.6rem;

    @media only screen and (max-width:1200px){
margin-left:0.4rem;
padding: 0.2rem 0.5rem;

 }

    @media only screen and (max-width: 790px){
    padding: 0.2rem 0.5rem;
 margin-left:0.2rem;
    }
`
const Notifications =styled.div`
     margin-left:2rem;
  font-weight: 800;
 font-family:Arial, Helvetica, sans-serif;
 font-size: 18px;

  @media only screen and (max-width:1200px){
 font-weight:600;
 font-size:15.5px ;
 }

  @media only screen and (max-width: 790px){
    font-weight:600;
    font-size:15px ;
  }
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

   @media only screen and (max-width:1200px){

     margin-left: 3rem;

   }

  @media only screen and (max-width: 790px){
     margin-left: 6rem;

  }
`
const RedDot = styled.div`
   background-color:#EB5464;
   width:1rem;
   height:1rem;
   border-radius:50% ;
   position: absolute;
   top:0.8rem;
   left:12.8rem ;

@media only screen and (max-width:1200px){
 top:0.5rem;
   left:6.98rem ;
 width:0.95rem;
   height:0.95rem;
   }

   @media only screen and (max-width: 790px){
     top:0.8rem;
   left:10rem ;

  }

`
export default DarkNavbar
