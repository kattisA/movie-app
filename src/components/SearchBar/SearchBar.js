import React from "react";
import SearchIcon from './../../icons/search.svg';
import styles from "./searchbar.module.css";

// SearchBar inspired by https://codepen.io/gungorbudak/pen/ooKNpz

const SearchBar = (props) => {
    return (
        <div className={"col col-sm-4 form-group " + styles.searchBar}>
            <img className={styles.formControlFeedback} src={SearchIcon} alt="Search icon" />
            <input
                className={styles.formControl}
                aria-label="search bar"
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
            >
            </input>
        </div>
    )
};

export default SearchBar;