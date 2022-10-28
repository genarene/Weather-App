import React, {useState, createContext } from "react";
 export const CountryContext = createContext();


export const CountryProvider = ({ children }) => {

  const {showPlaces, setShowPlaces}=useState([])

    const [countries, setCountries] = useState([]);
    


    return (
        <CountryContext.Provider value={{countries, setCountries,showPlaces,setShowPlaces}}>
            {children}
        </CountryContext.Provider>
    )
}
