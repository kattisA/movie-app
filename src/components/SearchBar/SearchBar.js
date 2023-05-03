import React from "react";
import SearchIcon from './../../icons/search.svg';

// SearchBar inspired by https://codepen.io/gungorbudak/pen/ooKNpz

const SearchBar = (props) => {
    return (
        <div className={" form-group search-bar"}>
            <img className="form-control-feedback" src={SearchIcon} alt="Search icon" />
            <input
                className="form-control"
                aria-label="search bar"
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
            >
            </input>
        </div>
    )
};

export default SearchBar;