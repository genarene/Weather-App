import React from 'react'
import styled from 'styled-components'
import DarkSection from './sections/DarkSection'
import LightSection from './sections/LightSection'

const Layout = () => {
    return (
        <LayoutGrid>
            <LightSection />
            <DarkSection/>
        </LayoutGrid>
    )
}

const LayoutGrid = styled.div`
display: flex;
margin:0;
padding: 2rem 4rem;
height:100%;
font-family: 'Montserrat', sans-serif;
`


export default Layout
