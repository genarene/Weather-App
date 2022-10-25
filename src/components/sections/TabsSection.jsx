import React, {useState} from 'react'
import styled from 'styled-components'
import BiAnnualTable from '../tables/BiAnnualTable'
import MonthlyTable from '../tables/MonthlyTable'
import TriMonthlyTable from '../tables/TriMonthlyTable'
import WeeklyTable from '../tables/Weeklytable'



const TabsSection = () => {
    const [activeTab, setActiveTab] = useState("")
    

    const handleWeek = () => {
        
        setActiveTab("Week")
       
    }
    
    const handleMonth = () => {
        
        setActiveTab("Month");
    }

     const handleTriMonthly = () => {
        
        setActiveTab("TriMonthly");
     }
    
    const handleBiAnnual = () => {
       setActiveTab("BiAnnual")
    }

  return (
      <Container>
          <Tabs>
              <TabList onClick={handleWeek}>
                  Week
                  <Dot/>
              </TabList>
               <TabList onClick={handleMonth}>
                  Month
                  <Dot/>
              </TabList>
              <TabList onClick={handleTriMonthly}>
                  3 Month
                  <Dot/>
              </TabList>
               <TabList onClick={handleBiAnnual}>
                  6 Month
                  <Dot/>
              </TabList>
             
          </Tabs>
           <ChartDiv>
                  {/* contents of the active tab */} 
              {activeTab === "Week" ? <WeeklyTable /> :activeTab === "Month" ? <MonthlyTable /> : activeTab === "TriMonthly" ? <TriMonthlyTable /> : <BiAnnualTable/>}
              </ChartDiv>
      </Container>
  )
}

const Container = styled.div`
  padding-left:3rem;
    margin-top:1.5rem;

`

const Tabs = styled.ul`
    display:flex ;  
    justify-content:space-evenly;
   list-style:none;
   color:#8a95a8 ;
   font-weight:500;
   margin:3rem 5rem 1rem  0;
     `
     const Dot = styled.div`
display:none ;


`

const ChartDiv =styled.div`
   

    
`
const TabList =styled.li`
    text-align:center;
    width:10%; 
  
   cursor: pointer;  
&:hover{
     color: #555284 ;
     font-weight:600;
     font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
transition: all 0.5s ease;

}
   &:hover ${Dot} {
transition: all 0.5s ease;
display: inline-block;
 width: 7px;
 height:7px;
background-color:#555284;
 border-radius: 100%;
  margin-left:20px;
  margin-right:20px;
  margin-top:0.35rem;
   }

   
`


export default TabsSection