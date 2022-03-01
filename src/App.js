import './styles/app.css';
import {useState } from "react"
import {BrowserRouter, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import SpecializedPage from './components/SpecializedPage';
import MainDashBoard from './components/MainDashBoard';
function App() {
  const [mode, setMode] = useState(true);
  return (
    <BrowserRouter>
      <div className={mode ? "App" : "AppDark"}>
        <div className={mode ? "ligth header" : "dark header"}>
          <h1 className="title">Where in the world?</h1>
          <button className={mode ? "ligth modeButton" : "dark modeButton"} onClick={() => { setMode(!mode) }}>
            {mode ? <FontAwesomeIcon icon={faMoon} ></FontAwesomeIcon> : <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>}
            <h4 className="Mode">{mode ? "Dark Mode" : "Ligth Mode"}</h4>
          </button>
        </div>
        <Routes>
          <Route path="/" element={<MainDashBoard mode={mode}/>} />
          <Route path="/SpecializedPage" element={<SpecializedPage mode={mode}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
