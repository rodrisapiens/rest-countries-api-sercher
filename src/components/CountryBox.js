import React from 'react'
import "../styles/countryBox.css"
function CountryBox({flag,name,population,region,capital,mode}) {
  return (
    <div className={mode?'ligth countryBox':"dark countryBox"}>
         <img src={flag} alt="" className="flag" />
       <h2 className="name">{name}</h2>
        <div className="datas">
            <p>Population:{population}</p>
            <p>Region:{region}</p>
            <p>Capital:{capital}</p>
        </div>  
    </div>
  )
}

export default CountryBox