import React from 'react'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import "../styles/specializedPage.css"
function SpecializedPage({mode}) {
    const location = useLocation()
    const { info } = location.state
    return (

        <div className='specializedPage'>
            <Link to={"/"}>
                <button className={mode?"ligth back":"dark back"}>Back</button>
            </Link>
            <img src={info.flags.svg} alt="" className="bigFlag" />
            <h1>{info.name.common}</h1>
            <div className="firstInfos">
                <p className="info">Native Name:{Object.entries(info.name.nativeName).map((obj)=>
                {
                    return <><span className='key'>{obj[0]}</span>:{obj[1].common}</>;
                

                })}</p>
                <p className="info">Population:{info.population}</p>
                <p className="info">Region:{info.region}</p>
                <p className="info">Sub Region:{info.subRegion}</p>
                <p className="info">Capital:{info.capital}</p>
            </div>
            <div className="secondInfos">
                <p className="info">Top Level Domain:{info.tld[0]}</p>
                <p className="info">Currencies:{info.currencies[0]}</p>

                <p className="info">Languages:{Object.entries(info.languages).map((language)=>
                {
                    return language+"."
                }) }</p>
                <h4>Border countries</h4>
                

            </div>
        </div>

    )
}

export default SpecializedPage