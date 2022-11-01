import React, { useContext } from 'react'
import Cards from './Cards'
import Berlin from "../../assets/images/berlin.jpg"
import Paris from "../../assets/images/paris.jpg"
import NewYork from "../../assets/images/newyork.jpg"
import styled from 'styled-components'
import CardOutline from '../cards/CardOutline'
import { CountryContext } from '../contexts/countryContext'


const CountryCards = () => {

  const countryData = [
  { name: "Belgium,Europe", img: Berlin},
  {  name: "India, Asia", img: Paris },
  {  name: "Bolivia, South America", img: NewYork },
  { name: "Ghana, Africa", img: Berlin },
  
  ]
  
  const { countries, setCountries } = useContext(CountryContext);

  const handleCountries = () => {
    setCountries( [...countryData]);
   
  }
  
  return (
    <Container>
       <Cards image={Berlin} name="Berlin, Germany"/>
    <Cards image={Paris} name="Paris, France"/>
      <Cards image={NewYork} name="NewYork, USA" />
       {
        countries.map((country) => {
          console.log(country.name, country.continent)
          return <Cards name={country.name} image={ country.img} />
        })
      }
       <CardOutline addCountry={() => handleCountries()} />
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