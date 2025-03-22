import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"

function SearchBox() {
    const [selectValue, setSelectValue] = useState("All");
    const [isSearchBarOnFocus, setIsSearchBarOnFocus] = useState(false);
    return (
    <div
        className={`rounded-md flex h-10 bg-amber-50 border-2 ${isSearchBarOnFocus ? "border-amber-400": "border-gray-400"}`}
        onFocus={()=>setIsSearchBarOnFocus(true)}
        onBlur={()=>setIsSearchBarOnFocus(false)}
    >
        <select
            className='border-r-1 w-10'
            value={selectValue}
            onChange={(e)=>setSelectValue(e.value)}
        >
            <option>All</option>
            <option selected>
                Electronic
            </option>
            
        </select>  
        <input
            className='h-full p-2 outline-0'
            type="text"
            placeholder='Search Amazon'
        />
        <button
            className='h-full w-10 bg-amber-300 rounded-r-md hover:cursor-pointer '
        >
            <FontAwesomeIcon icon={faMagnifyingGlass} 
                className=''
            />
        </button>
    </div>
    )
}

export default SearchBox
