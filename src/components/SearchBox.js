import React from "react";

const SearchBox = (props) => {
    return (
        <div className="col col-sm-4 ">
            <label>Type to search:</label>
            <input
                className='form-control'
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
            >
            </input>
        </div>
    )
};

export default SearchBox;