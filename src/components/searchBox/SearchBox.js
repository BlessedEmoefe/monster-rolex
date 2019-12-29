import React from "react"

import "./searchBox.style.css"

const SearchBox =({placeholder,handleChange})=>{
return(
    <div>
 <input 
 className="search"
 type="search" 
 placeholder={placeholder}
  onChange={handleChange}/>
    </div>
)
}
export default SearchBox;