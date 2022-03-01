import React from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import DropDown from './DropDown';
import CountryBox from "./CountryBox"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
const NUM_COUNTRIES = 8;
function MainDashBoard({ mode }) {
    const [name, setName] = useState("");
    const [data, setData] = useState("");
    const [initialInfo, setInitialInfo] = useState("");
    const random = useRef([]);
    const [region, setRegion] = useState("");
    const [regionData, setRegionData] = useState("");
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`).then((response) => {
            return response.json()
        }).then((info) => {
            setData(info);
        }).catch(() => console.error("error!"))
    }, [name])
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`).then((response) => {
            return response.json()
        }).then((info) => {
            setInitialInfo(info);
            for (let index = 0; index < NUM_COUNTRIES; index++) {
                random.current[index] = Math.floor(Math.random() * 249);
            }
        }).catch(() => console.error("error!"))
    }, [])
    useEffect(() => {
        for (let index = 0; index < NUM_COUNTRIES; index++) {
            random.current[index] = Math.floor(Math.random() * 249);
        }
    }, [name])
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/region/${region}`).then((response) => {
            return response.json()
        }).then((info) => {
            setRegionData(info);
            console.log(info)
        }
        )
    }, [region])

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return (
        <>
            <div className="selectors">
                <div className={mode ? "ligth serchColumn" : "dark serchColumn"}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="serchIcon"></FontAwesomeIcon>
                    <input type="text" required placeholder='Serch for a country...' value={name} className="sercher" onChange={(e) => { setName(e.currentTarget.value) }} />
                </div>
                <DropDown mode={mode} setRegion={setRegion} region={region} />
            </div>


            <div className="countries">
                {
                    initialInfo[0] === undefined ? null : name === "" ? region === "" ?
                        <>
                            <Link to={"/SpecializedPage"} state={{info:initialInfo[random.current[0]]}}>
                                <CountryBox key={initialInfo[random.current[0]].name.official} flag={initialInfo[random.current[0]].flags.svg} name={initialInfo[random.current[0]].name.common} population={numberWithCommas(initialInfo[random.current[0]].population)} region={initialInfo[random.current[0]].region} capital={initialInfo[random.current[0]].capital} mode={mode} />
                            </Link>
                            <Link to={"/SpecializedPage"} state={{info:initialInfo[random.current[1]]}}>
                                <CountryBox key={initialInfo[random.current[1]].name.official} flag={initialInfo[random.current[1]].flags.svg} name={initialInfo[random.current[1]].name.common} population={numberWithCommas(initialInfo[random.current[1]].population)} region={initialInfo[random.current[1]].region} capital={initialInfo[random.current[1]].capital} mode={mode} />
                            </Link>
                            <Link to={"/SpecializedPage"} state={{info:initialInfo[random.current[2]]}}>
                                <CountryBox key={initialInfo[random.current[2]].name.official} flag={initialInfo[random.current[2]].flags.svg} name={initialInfo[random.current[2]].name.common} population={numberWithCommas(initialInfo[random.current[2]].population)} region={initialInfo[random.current[2]].region} capital={initialInfo[random.current[2]].capital} mode={mode} />
                            </Link>
                            <Link to={"/SpecializedPage"} state={{info:initialInfo[random.current[3]]}}>
                                <CountryBox key={initialInfo[random.current[3]].name.official} flag={initialInfo[random.current[3]].flags.svg} name={initialInfo[random.current[3]].name.common} population={numberWithCommas(initialInfo[random.current[3]].population)} region={initialInfo[random.current[3]].region} capital={initialInfo[random.current[3]].capital} mode={mode} />
                            </Link>
                            <Link to={"/SpecializedPage"} state={{info:initialInfo[random.current[4]]}}>
                                <CountryBox key={initialInfo[random.current[4]].name.official} flag={initialInfo[random.current[4]].flags.svg} name={initialInfo[random.current[4]].name.common} population={numberWithCommas(initialInfo[random.current[4]].population)} region={initialInfo[random.current[4]].region} capital={initialInfo[random.current[4]].capital} mode={mode} />
                            </Link>
                            <Link to={"/SpecializedPage"} state={{info:initialInfo[random.current[5]]}}>
                                <CountryBox key={initialInfo[random.current[5]].name.official} flag={initialInfo[random.current[5]].flags.svg} name={initialInfo[random.current[5]].name.common} population={numberWithCommas(initialInfo[random.current[5]].population)} region={initialInfo[random.current[5]].region} capital={initialInfo[random.current[5]].capital} mode={mode} />
                            </Link>
                            <Link to={"/SpecializedPage"} state={{info:initialInfo[random.current[6]]}}>
                                <CountryBox key={initialInfo[random.current[6]].name.official} flag={initialInfo[random.current[6]].flags.svg} name={initialInfo[random.current[6]].name.common} population={numberWithCommas(initialInfo[random.current[6]].population)} region={initialInfo[random.current[6]].region} capital={initialInfo[random.current[6]].capital} mode={mode} />
                            </Link>
                            <Link to={"/SpecializedPage"} state={{info:initialInfo[random.current[7]]}}>
                                <CountryBox key={initialInfo[random.current[7]].name.official} flag={initialInfo[random.current[7]].flags.svg} name={initialInfo[random.current[7]].name.common} population={numberWithCommas(initialInfo[random.current[7]].population)} region={initialInfo[random.current[7]].region} capital={initialInfo[random.current[7]].capital} mode={mode} />
                            </Link>
                        </> : null : null
                }
                {
                    name === "" ? regionData[0] === undefined ? null : regionData.map((country) => {
                        return <Link to={"/SpecializedPage"} state={{info:country}}>
                            <CountryBox key={country.name.official} flag={country.flags.svg} name={country.name.common} population={numberWithCommas(country.population)} region={country.region} capital={country.capital} mode={mode} />
                        </Link>
                    }) : null
                }
                {data[0] === undefined ? "not found, keep writing..." : data.map((country) => {
                    return <Link to={"/SpecializedPage"} state={{info:country}}>
                    <CountryBox key={country.name.official} flag={country.flags.svg} name={country.name.common} population={numberWithCommas(country.population)} region={country.region} capital={country.capital} mode={mode} />
                    </Link>
                })
                }
            </div>
        </>
    )
}

export default MainDashBoard