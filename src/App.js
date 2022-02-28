import './styles/app.css';
import { useEffect, useRef, useState } from "react"
import CountryBox from "./components/CountryBox"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const NUM_COUNTRIES = 8;
function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState("");
  const [mode, setMode] = useState(true);
  const [initialInfo, setInitialInfo] = useState("");
  const random = useRef([]);
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
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
  return (
    <div className={mode ? "App" : "AppDark"}>
      <div className={mode ? "ligth header" : "dark header"}>
        <h1 className="title">Where in the world?</h1>
        <button className={mode ? "ligth modeButton" : "dark modeButton"} onClick={() => { setMode(!mode) }}>
          {mode ? <FontAwesomeIcon icon={faMoon} ></FontAwesomeIcon> : <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>}
          <h4 className="Mode">{mode ? "Dark Mode" : "Ligth Mode"}</h4>
        </button>
      </div>
      <div className="selectors">
        <div className={mode ? "ligth serchColumn" : "dark serchColumn"}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="serchIcon"></FontAwesomeIcon>
          <input type="text" required placeholder='Serch for a country...' value={name} className="sercher" onChange={(e) => { setName(e.currentTarget.value) }} />
        </div>
        {/*       <DropDown/>
 */}      </div>
      {
        initialInfo[0] === undefined ? null :name === "" ?
          
    
   
   <>
   <CountryBox key={initialInfo[random.current[0]].name.official} flag={initialInfo[random.current[0]].flags.svg} name={initialInfo[random.current[0]].name.common} population={numberWithCommas(initialInfo[random.current[0]].population)} region={initialInfo[random.current[0]].region} capital={initialInfo[random.current[0]].capital} mode={mode}/>
   <CountryBox key={initialInfo[random.current[1]].name.official} flag={initialInfo[random.current[1]].flags.svg} name={initialInfo[random.current[1]].name.common} population={numberWithCommas(initialInfo[random.current[1]].population)} region={initialInfo[random.current[1]].region} capital={initialInfo[random.current[1]].capital} mode={mode}/>
   <CountryBox key={initialInfo[random.current[2]].name.official} flag={initialInfo[random.current[2]].flags.svg} name={initialInfo[random.current[2]].name.common} population={numberWithCommas(initialInfo[random.current[2]].population)} region={initialInfo[random.current[2]].region} capital={initialInfo[random.current[2]].capital} mode={mode}/>
   <CountryBox key={initialInfo[random.current[3]].name.official} flag={initialInfo[random.current[3]].flags.svg} name={initialInfo[random.current[3]].name.common} population={numberWithCommas(initialInfo[random.current[3]].population)} region={initialInfo[random.current[3]].region} capital={initialInfo[random.current[3]].capital} mode={mode}/>
   <CountryBox key={initialInfo[random.current[4]].name.official} flag={initialInfo[random.current[4]].flags.svg} name={initialInfo[random.current[4]].name.common} population={numberWithCommas(initialInfo[random.current[4]].population)} region={initialInfo[random.current[4]].region} capital={initialInfo[random.current[4]].capital} mode={mode}/>
   <CountryBox key={initialInfo[random.current[5]].name.official} flag={initialInfo[random.current[5]].flags.svg} name={initialInfo[random.current[5]].name.common} population={numberWithCommas(initialInfo[random.current[5]].population)} region={initialInfo[random.current[5]].region} capital={initialInfo[random.current[5]].capital} mode={mode}/>
   <CountryBox key={initialInfo[random.current[6]].name.official} flag={initialInfo[random.current[6]].flags.svg} name={initialInfo[random.current[6]].name.common} population={numberWithCommas(initialInfo[random.current[6]].population)} region={initialInfo[random.current[6]].region} capital={initialInfo[random.current[6]].capital} mode={mode}/>
   <CountryBox key={initialInfo[random.current[7]].name.official} flag={initialInfo[random.current[7]].flags.svg} name={initialInfo[random.current[7]].name.common} population={numberWithCommas(initialInfo[random.current[7]].population)} region={initialInfo[random.current[7]].region} capital={initialInfo[random.current[7 ]].capital} mode={mode}/>
   </>:null
}
 
      <div className="countries">
        {data[0] === undefined ? "not found" : data.map((country) => {
          return <CountryBox key={country.name.official} flag={country.flags.svg} name={country.name.common} population={numberWithCommas(country.population)} region={country.region} capital={country.capital} mode={mode} />
        })
        }
      </div>
    </div>
  );
}

export default App;
