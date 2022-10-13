import React from 'react'
import styled from 'styled-components'
import DarkBannerSection from '../DarkBannerSection'
import DarkChartSection from '../DarkChartSection'
import DarkNavbar from '../NavbarSection/DarkNavbar'

const DarkSection = () => {
    return (
         <DarkContainer>
            <DarkNavbar />
            <DarkBannerSection />
            <DarkChartSection/>
            </DarkContainer>
    )
}

const DarkContainer = styled.div`
background-color:#110E3C;
width: 35%;
border:1px solid #110E3C;
border-top-right-radius:1.25rem;
border-bottom-right-radius:1.25rem;
padding-top: 4.5rem;
color:whitesmoke;
height: auto;
`

export default DarkSection
