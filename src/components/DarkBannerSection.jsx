import React from 'react'
import styled from 'styled-components'
import { FaCloudRain } from 'react-icons/fa'
import { AiFillCloud } from "react-icons/ai"
import { AiTwotoneCloud } from "react-icons/ai"



const DarkBannerSection = () => {
  return (
    <Container>
      <CloudIconRight>
 <AiFillCloud size="12rem" color="#1E1D46"/>
      </CloudIconRight>
      <CloudIconLeft>
          <AiTwotoneCloud size="10rem" color="#1E1D46"/>
      </CloudIconLeft>
        
              <DateSection> <FaCloudRain color='#4E94EC' size="4rem" />
             
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
position: relative;

@media only screen and (max-width:1200px){
margin-top:0.5rem;

}

@media only screen and (max-width: 790px){
margin-top:0.8rem;

}
`
const DateSection = styled.div`
 display: flex;
 align-items: center;
 margin-right: 1rem;
`
const TimeTitle = styled.p`
font-weight: 600;
font-family:monospace;
font-size: 3.5rem;
margin-left: 25px;

@media only screen and (max-width:1200px){
  font-weight:500;
  font-size:2.5rem ;
}

@media only screen and (max-width: 790px){
font-weight:400;
font-size:1.5rem;
}

`
const DateSpan= styled.span`
    font-weight: 200;
  font-size: 2rem;

@media only screen and (max-width:1200px){
  font-weight:500;
  font-size:1.5rem ;
}

@media only screen and (max-width: 790px){
font-weight:200;
font-size:1rem;
}
`
const DegreeNumber = styled.p`
position:relative ;
  font-weight: 300;
  font-size: 8rem;
  margin:0 ;
  padding:0 ;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  margin-top: 2rem;

@media only screen and (max-width:1200px){
  font-weight:300;
  font-size:5rem;
  margin-top:1rem;

}

  @media only screen and (max-width: 790px){
font-weight:300;
font-size:1.6rem;
 margin-top:1.3rem;
}
 
`
const DegreeSymbol= styled.div`
font-size: 1.6rem;
margin-left: 0px;
 position: absolute;
 top: 1.5rem;
 right: 0;
 left:10rem ;
 color:white;
 font-weight:400;


 @media only screen and (max-width:1200px){
  font-weight:400;
  font-size:1.2rem;
 left:5.9rem ;
 top:0

}

  @media only screen and (max-width: 790px){
font-weight:400;
font-size:1rem;
 margin-top:0;
 left:2rem ;
 top:0
}
`
const CountrySection = styled.p`
 font-family: 'Montserrat', sans-serif;
 font-size:1rem;
 font-weight:400;
  display:flex ;
color: whitesmoke;
margin-top:2rem;
 
 @media only screen and (max-width: 790px){
  margin-top:1.4rem;
 }
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
const CloudIconRight = styled.div`
margin-right: 25rem;
position:absolute;
bottom:10rem;

@media only screen and (max-width:1200px){
display:none ;
 }


@media only screen and (max-width: 790px){
display:none ;
}
`
const CloudIconLeft = styled.div`
  margin-left: 30rem;
position:absolute;
top:0;

@media only screen and (max-width:1200px){
display:none ;
 }

@media only screen and (max-width: 790px){
display:none ;
}
`


export default DarkBannerSection