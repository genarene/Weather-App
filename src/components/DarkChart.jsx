import React from 'react'
import styled from 'styled-components'

const DarkChart = () => {
  return (
      <Container>
          <Title>Chance of rain</Title>
    </Container>
  )
}
const Container = styled.div`
    padding-left: 3rem;
`

const Title = styled.p`
color:whitesmoke;
font-weight:500;
font-size:18px;
font-family: 'Montserrat', sans-serif;
`


export default DarkChart