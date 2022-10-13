import React from 'react'
import Cards from './Cards'
import Berlin from "../../assets/images/berlin.jpg"
import Paris from "../../assets/images/paris.jpg"
import NewYork from "../../assets/images/newyork.jpg"
import styled from 'styled-components'
import CardOutline from '../cards/CardOutline'


const CountryCards = () => {
  return (
    <Container>
       <Cards image={Berlin} title="Berlin, Germany"/>
    <Cards image={Paris} title="Paris, France"/>
      <Cards image={NewYork} title="NewYork, USA" />
      <CardOutline/>
    {/* <Cards image={Berlin} title="Berlin, Germany"/> */}
    </Container>
   
  )
}

const Container = styled.div`
display:grid;
grid-template-columns:repeat(4,15rem);
grid-gap:20px 5px;
flex-direction:row ;
`

export default CountryCards