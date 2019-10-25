import React from 'react'

import './searchbox.style.css';

const Searchbox = ({ placeholder, handleChange}) => {
    return(
    <input type='search'
    className='search'
    placeholder={placeholder}
    onChange={handleChange}  
    />
     )
}

export default Searchbox;