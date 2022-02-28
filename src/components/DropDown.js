import React, { useState } from 'react'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/dropDown.css"
function DropDown({mode,setRegion,region}) {
    const [drop, setDrop] = useState(false);
    return (
        <div className='dropDown'>
            <button className={mode?"ligth mainBox":"dark mainBox"} onClick={()=>{setDrop(!drop)}}>
                <h3 className="filterBy">
                    Filter by Region
                </h3>
                <FontAwesomeIcon icon={faAngleDown} className={drop?"angleUp":"angleDown"}></FontAwesomeIcon>
            </button>
            {
                drop?
                <>
                <div className="filterOptions">
                    <button className={region==="Africa"?(mode?"ligth optionBox on":"dark optionBox on"):mode?"ligth optionBox ":"dark optionBox"} onClick={(e)=>{setRegion("Africa")}}>Africa</button>
                    <button className={region==="America"?mode?"ligth optionBox on":"dark optionBox on":mode?"ligth optionBox ":"dark optionBox"} onClick={()=>{setRegion("America")}}>America</button>
                    <button className={region==="Oceania"?mode?"ligth optionBox on":"dark optionBox on":mode?"ligth optionBox ":"dark optionBox"} onClick={()=>{setRegion("Oceania")}}>Oceanica</button>
                    <button className={region==="Europe"?mode?"ligth optionBox on":"dark optionBox on":mode?"ligth optionBox ":"dark optionBox"} onClick={()=>{setRegion("Europe")}}>Europe</button>
                    <button className={region==="Asia"?mode?"ligth optionBox on":"dark optionBox on":mode?"ligth optionBox ":"dark optionBox"} onClick={()=>{setRegion("Asia")}}>Asia</button>

                </div>
                </>:null
            }
        </div>
    )
}

export default DropDown