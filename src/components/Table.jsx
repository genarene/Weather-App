
import React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'
import {BsDropletFill} from "react-icons/bs"



function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
              <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {           
                  return <td {...cell.getCellProps()}>
                      {cell.render('Cell')}
                  </td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const LightTable=()=>{
  const columns = React.useMemo(
    () => [
      {
        
            accessor: 'day',
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
        
            accessor: 'icon',
          },
      {
       
            accessor: 'temperature',
          },
     
      ],
     
    []
  )
    
    const weatherData = [
        {
            day: "Sunday",
            humidity: " 54%",
            icon: 'icon',
            temperature:'17C'
        },
        {
            day: "Monday",
            humidity: "21%",
            icon: 'icon',
            temperature:'20C'
            
        },
        {
            day: "Tuesday",
            humidity: "34%",
            icon: 'icon',
            temperature:'24C'
            
        },
        {
            day: "Wednesday",
            humidity: "30%",
            icon: 'icon',
            temperature:'28C'
            
        },
        {
            day: "Thursday",
            humidity: "44%",
            icon: 'icon',
            temperature:'27C'  
        },
          {
            day: "Friday",
            humidity: "24%",
            icon: 'icon',
            temperature:'15C'  
        },
            {
            day: "Saturday",
            humidity: "37%",
            icon: 'icon',
            temperature:'20C'  
        },
    ]


  return (
    <Styles>
      <Table columns={columns} data={weatherData} />
    </Styles>
  )
}

const Styles = styled.div`
  table {
    border-spacing: 0 1.1rem ;
    width:96%;
    color:#656F92;
    font-weight:500;
    font-size:1.1rem ;
font-family: 'Montserrat', sans-serif;
 
    tr {
      :last-child {
        td {
          border-bottom: 0;
         
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem 1rem;
      
:first-child{ 
}
      :nth-child(2){
      }
      :nth-child(3){
      }
      :last-child {
      }
    }
  }
`
const Humidity=styled.div`
    display:flex ;
    align-items:center ;
`
 const HumidityCell = styled.p`
   margin-left:1rem;
   font-family:'Courier New', Courier, monospace;
  
  `

export default LightTable;
