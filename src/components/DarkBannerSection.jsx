import React from 'react'
import styled from 'styled-components'
import {FaCloudRain} from 'react-icons/fa'


const DarkBannerSection = () => {
  return (
      <Container>
         
              <DateSection> <FaCloudRain color='#4E94EC' size="39px" />
             
              <TimeTitle> Today <br />
                  <DateSpan>Sat,3 Aug</DateSpan>
              </TimeTitle> 
             
          </DateSection>
          
          <DegreeNumber> 28
              <DegreeSymbol>℃</DegreeSymbol>
              
          </DegreeNumber>
            
               <CountrySection>Berlin, Germany</CountrySection>
              <CountrySection>Feels like 32 <Dot/> Sunset 20:15</CountrySection>
         
         
          
      </Container>
  )
}

const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center ;
align-items: center;
margin-top:5rem;
`
const DateSection = styled.div`
 display: flex;
 align-items: center;
 margin-right: 1rem;
`
const TimeTitle = styled.p`
     font-weight: 600;
font-family:monospace;
 font-size: 2rem;
 margin-left: 25px;
`
const DateSpan= styled.span`
    font-weight: 200;
  font-size: 1rem;
`
const DegreeNumber = styled.p`
position:relative ;
     font-weight: 300;
  font-size: 8rem;
  margin:0 ;
  padding:0 ;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  margin-top: 0;
 
`
const DegreeSymbol= styled.div`
     font-size: 1.6rem;
  margin-left: 0px;
 position: absolute;
 top: 1.5rem;
 right: 0;
 left:10rem ;
 color:white;
 font-weight:400 ;
`
const CountrySection = styled.p`
 font-family: 'Montserrat', sans-serif;
 font-size:1rem;
 font-weight:400;
  /* position: absolute; */
  /* bottom:5rem; */
  display:flex ;
color: whitesmoke;
 
`
const Dot = styled.div`
display: inline-block;
 width: 5px;
 height:5px;
background-color:whitesmoke;
 border-radius: 100%;
  margin-left:20px;
  margin-right:20px;
  margin-top:0.35rem;
 
 
 
`
export default DarkBannerSection