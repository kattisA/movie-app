import React from "react";

const SearchBox = (props) => {
    return (
        <div className="col col-sm-4 ">
            <label htmlFor="searchBox">Type to search:</label>
            <input
                className='form-control'
                id="searchBox"
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
            >
            </input>
        </div>
    )
};

export default SearchBox;