import React, { Component } from 'react';
import './Button.css';

/**
 * Functional component, see https://reactjs.org/docs/components-and-props.html
 * 
 * @param {Object} props 
 */
function Button (props) {
    function handleSearchClick(e) {
        e.preventDefault();
        console.log("button clicked");
    }

    return (
        <input className="button" type="button" onClick={handleSearchClick} value={props.text}/>
    );
}

export default Button;