import React from 'react'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import "../styles/specializedPage.css"
function SpecializedPage({ mode }) {
    const location = useLocation();
    const { info } = location.state;
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return (<>
        <Link to={"/"}>
            <button className={mode ? "ligth back" : "dark back"}>
                <FontAwesomeIcon icon={faArrowLeftLong} />
                Back
            </button>
        </Link>
        <div className={mode ? "ligth specializedPage spe" : "dark specializedPage spe"}>

            <img src={info.flags.svg} alt="" className="bigFlag" />
            <div className="secondHalf">
                <div className="firstOfSecond">
                <h1>{info.name.common}</h1>
                <div className="firstInfos">
                    <div className="info"><b>Native Name</b>:{Object.entries(info.name.nativeName).map((obj) => {
                        return <p className="info"key={obj[0]}>{obj[0]}:{obj[1].common}</p>;


                    })}</div>
                    <p className="info"><b>Population</b>:{numberWithCommas(info.population)}</p>
                    <p className="info"><b>Region</b>:{info.region}</p>
                    <p className="info"><b>Sub Region</b>:{info.subregion}</p>
                    <p className="info"><b>Capital</b>:{info.capital}</p>
                </div>
                </div>
                <div className="secondInfos">
                    <p className="info"><b>Top Level Domain</b>:{info.tld[0]}</p>
                    <div className="info"><b>Currencies</b>:{info.currencies===undefined?null:Object.entries(info.currencies).map((currencie) => {
                        return <p className="info" key={currencie[1].name}>{currencie[1].name}</p>
                    })}</div>

                    <p className="info"><b>Languages</b>:{Object.entries(info.languages).map((language) => {
                        return language[1] + "."
                    })}</p>
                </div>
                <h4>Border countries:</h4>
                <div className="borders">
                    {
                        info.borders === undefined ? "not" :
                            Object.entries(info.borders).map((border) => {
                                return <div key={border} className={mode ? 'ligth borderBox' : "dark borderBox"}>{border[1]}</div>
                            })}
                </div>
            </div>
        </div>

    </>)
}

export default SpecializedPage