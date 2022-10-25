import React from 'react'
import styled from 'styled-components'
import DarkBannerSection from '../DarkBannerSection'
import DarkNavbar from '../NavbarSection/DarkNavbar'
import {BsFillCloudFill} from "react-icons/bs"


const DarkSection = () => {
    return (
        <DarkContainer>
              <CloudTop>
 <BsFillCloudFill size="5rem" color="#1E1D46"/>
     </CloudTop>
            <DarkNavbar />
            <DarkBannerSection />
             <CloudIconBottomLeft>
 <BsFillCloudFill size="5rem" color="#1E1D46"/>
      </CloudIconBottomLeft>
            </DarkContainer>
    )
}

const DarkContainer = styled.div`
background-color:#110E3C;
border:1px solid #110E3C;
border-top-right-radius:1.25rem;
border-bottom-right-radius:1.25rem;
padding-top: 4.5rem;
color:whitesmoke;
height: auto;
position: relative;
`

const CloudTop = styled.div`
margin-left:32rem;
top:2.5rem;
position: absolute;
`
const CloudIconBottomLeft = styled.div`
right: 5rem;
position:absolute;
bottom:0rem;
`

export default DarkSection
