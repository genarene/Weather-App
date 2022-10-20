import React from 'react'
import styled from 'styled-components'
import LightTable from './Table'

const LightTableArea = () => {
  return (
    <Container>
      <p>Tabs</p>
          <LightTable/>
    </Container>
  )
}

const Container = styled.div`
    padding-left:3rem;
    margin-top:1.5rem;
`

export default LightTableArea