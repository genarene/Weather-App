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
display: grid;
grid-template-columns:65rem 40rem;
margin:0;
padding: 2rem 4rem;
height:100%;
font-family: 'Montserrat', sans-serif;

/* medium screen */
@media only screen and (max-width:1200px){
   display: grid;
grid-template-columns:38rem 25rem;
}

/* for small screen */
@media only screen and (max-width:992px){
   display: grid;
grid-template-columns:30rem 22rem;
}

/* for extra small screens */
@media only screen and (max-width: 790px){
   display: flex;
flex-direction: column-reverse;
}
`


export default Layout
