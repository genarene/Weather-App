import React from 'react'
import styled from 'styled-components'
import CountryCard from '../../components/cards/CountryCards'
import VisualSection from '../VisualSection'
import LightNavbar from '../NavbarSection/LightNavbar'
const LightSection = () => {
    return (
         <LightContainer>
        <LightNavbar />
 <BannerTitle>
                    <WeatherSpan>Weather</WeatherSpan>
                    <ForecastSpan>Forecast</ForecastSpan>
        </BannerTitle>
            <CountryCard />
            <VisualSection/>
            </LightContainer>
       
    )
}

const LightContainer = styled.div`
background-color:#E3F6FE;
/* width: 55%; */
border:1px solid #E3F6FE;
border-top-left-radius:1.25rem;
border-bottom-left-radius:1.25rem;
padding-left: 3rem;
padding-top: 4rem;
height: auto;
`
const BannerTitle = styled.div`
display: flex;
margin-top:2.6rem;
`
const WeatherSpan = styled.span`
color:#110E3C ;
font-size: 2.5rem;
margin-right:1rem;
font-weight:200
`
const ForecastSpan = styled.span`
color:#110E3C ;
font-weight:400;
font-size: 2.5rem;
`
export default LightSection
