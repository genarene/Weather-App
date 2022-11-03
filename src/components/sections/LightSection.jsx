import React from 'react'
import styled from 'styled-components'
import CountryCard from '../../components/cards/CountryCards'
import { CountryProvider } from '../contexts/countryContext'
import Searchbar from '../NavbarSection/Searchbar'
import TabsSection from './TabsSection'


const LightSection = () => {
    return (
        <CountryProvider>
        <LightContainer>
                <Searchbar/>
        <BannerTitle>
             <WeatherSpan>Weather</WeatherSpan>
             <ForecastSpan>Forecast</ForecastSpan>
        </BannerTitle>
        <CountryCard />
        <TabsSection/>
        </LightContainer>
        </CountryProvider>   
    )
}

const LightContainer = styled.div`
background-color:#E3F6FE;
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
font-weight:200;

@media only screen and (max-width: 490px){
font-weight:200;
font-size: 1.2rem;
}

`
const ForecastSpan = styled.span`
color:#110E3C ;
font-weight:400;
font-size: 2.5rem;

@media only screen and (max-width: 490px){
font-weight:500;
font-size: 1.2rem;
}
`
export default LightSection
