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
  { title: "Belgium,Europe", img: Berlin},
  {  title: "India, Asia", img: Paris },
  {  title: "Bolivia, South America", img: NewYork },
  { title: "Ghana, Africa", img: Berlin },
  
  ]
  
  const { countries, setCountries } = useContext(CountryContext);

  const handleCountries = () => {
    setCountries( [...countryData]);
   
  }
  
  return (
    <Container>
       <Cards image={Berlin} title="Berlin, Germany"/>
    <Cards image={Paris} title="Paris, France"/>
      <Cards image={NewYork} title="NewYork, USA" />
       {
        countries.map((country) => {
          console.log(country.name, country.continent)
          return <Cards title={country.title} image={ country.img} />
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