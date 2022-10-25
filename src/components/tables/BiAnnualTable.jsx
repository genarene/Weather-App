
import React from 'react'
import styled from 'styled-components'
import { BsDropletFill,BsSunFill } from "react-icons/bs"
import { Table } from './Weeklytable'





const BiAnnualTable= ()=>{
  const columns = React.useMemo(
    () => [
      {
        
            accessor: 'month',
          },   
      {
          accessor: 'humidity',
          Cell: (props) => 
          {
              return (
                  <Humidity><BsDropletFill color='#4D93EB'/> <HumidityCell>{ props.cell.row.original.humidity}</HumidityCell></Humidity>
      
      );
        } ,
         
          },
          {
        
              accessor: "icon",
              Cell: (props) => {
                  return (
                      <>
                           <BsSunFill color='#F3C421' size="2rem" />
                   
                      </>
                     
                  )
              }
          },
      {
       
            accessor: 'temperature',
          },
     
      ],
     
    []
  )

  const biAnnualData = [
        {
            month: "June",
            humidity: " 54%",
            icon: 'icon',
            temperature:'17C'
        },
        {
            month: "December",
            humidity: "21%",
            icon: 'icon',
            temperature:'20C'
            
        },
    ]

  
  
  return (
     
      <Table columns={columns} data={biAnnualData} />
    
  )
}


const Humidity=styled.div`
    display:flex ;
    align-items:center ;
`
 const HumidityCell = styled.p`
   margin-left:1rem;
   font-family:'Courier New', Courier, monospace;
  
  `

export default BiAnnualTable;
