import React from 'react';

function SearchBar(props) {
    return(
    <div>
      <input type="text" title ="" placeholder="Search for names.." onChange={props.handleChange}></input>


    </div>
    )
}


export default SearchBar;