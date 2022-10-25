
import React from 'react'
import styled from 'styled-components'
import { BsDropletFill, BsSunFill } from "react-icons/bs"
import { Table } from './Weeklytable'



const TriMonthlyTable= ()=>{
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

  const monthlyData = [
        {
            month: "Jan",
            humidity: " 54%",
            icon: 'icon',
            temperature:'17C'
        },
        {
            month: "April",
            humidity: "21%",
            icon: 'icon',
            temperature:'20C'
            
        },
        {
             month: "July",
            humidity: "34%",
            icon: 'icon',
            temperature:'24C'
            
        },
        {
           month: "Sept",
            humidity: "30%",
            icon: 'icon',
            temperature:'28C'
            
        },
        {
           month:"Dec",
            humidity: "44%",
            icon: 'icon',
            temperature:'27C'  
        },
          
    ]

  
  
  return (
      <Table columns={columns} data={monthlyData} />
   
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

export default TriMonthlyTable;
