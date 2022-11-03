import React, {useState} from 'react'
import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi'
import "../../index.css"
import countryData from "../utilities/countryData.json"
import { getAllCountries } from '../services/CountryServices'




const Searchbar =() => {

    const [searchInput, setSearchInput] = useState("");
    const [showSearch, setShowSearch] = useState(false)

    const fetchAllCountries = () => {
        getAllCountries()
            .then((data) => {
            console.log('the data',data)
        })
    }

    fetchAllCountries();

    const filteredData = countryData.filter((data) => {
        if (searchInput.length === '') {
            return null;
        }
        else if (data.name.toLowerCase().match(searchInput))
        {
            return data;
        }

        return data.name.match(searchInput);
})


 const handleInput = (e) => {
     e.preventDefault();
     let inputText = e.target.value.toLowerCase();
     setSearchInput(inputText)
      setShowSearch(true);
   
    }

    const handleSearchValue = (searchValue) => {
        setSearchInput(searchValue);
        setShowSearch(false);
      
    }
  
   
    return (
        <Container>
            <InputContainer>
                 <Input type="text" placeholder="Search new place"  onChange={handleInput} value={searchInput} />  
            <SearchIcon>
                <BiSearch color='#b1b0b8' size="26px" fontWeight={"900"} />    
            </SearchIcon>
           
            </InputContainer>
            {
                showSearch && searchInput !== '' ? <SearchResult>
                {filteredData.slice(0,10).map((item) => (
              
                    <Items key={item.name} onClick={()=>handleSearchValue(item.name)}>{item.name} {item.continent} </Items>   
            ))}
          </SearchResult> : null
            }

            </Container>
    )
}


const Input = styled.input`
background-color:white;
border:1px solid white;
border-radius: 0.5rem;
padding:1.3rem 4rem;
color:#b1b0b8;
font-size:16px;
font-weight:bold;
cursor: pointer;

@media only screen and (max-width:1200px){
padding:1rem 2rem;  
width  :12rem ;
}

@media only screen and (max-width: 490px){
padding:0.5rem 0.2rem;    

}
`
const Container = styled.div`
display:flex;
flex-direction:column ;
width: 38.5%;
`
const InputContainer = styled.div`
position: relative; 
margin-bottom:1rem;


`
const SearchIcon =styled.div`
     position: absolute;
  top:1.19rem;
  right:3rem;
  cursor: pointer;

  @media only screen and (max-width:1200px){
    top:1.05rem;
  right:0;
}

@media only screen and (max-width: 490px){
 top:0.45rem;
  left:10rem;
}
`



const Items=styled.div`
    color:whitesmoke;
    font-size:1.10rem;
    font-weight:500;
    padding:1rem;
    text-align:center;
    cursor: pointer; 
    &:hover{
        background-color: #f87784;   
    }
`

const SearchResult = styled.div`
    background-color:#EB5464;
    width:100%;
    height:10rem;
 overflow:hidden;
    overflow-y:auto;
    border-radius:10px;

    &:-webkit-scrollbar{
        display:none ;
    }
`
export default Searchbar
