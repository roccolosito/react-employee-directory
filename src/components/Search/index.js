import React from 'react';
import './style.css';

function Search(props) {
    return (
        <form className="searchEmployees">
            <label className="searchEmployees">Go Fish:&nbsp;</label>
            <input
                onChange={props.handleSearchChange}
                value={props.value}
                name="search"
                type="text"
                className="searchEmployees" placeholder="Employee Name" />
            {/* <button className="searchEmployees"
                onClick={props.handleFormSubmit}
            >Submit</button> */}
        </form>
    );

};

export default Search;