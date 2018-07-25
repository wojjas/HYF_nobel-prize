import React, { Component } from 'react';
import './Year.css';

/**
 * Functional component, see https://reactjs.org/docs/components-and-props.html
 * 
 * @param {Object} props 
 */
function Year (props) {
    return (
        <div className="year">
            <label className="year-label">{props.label}</label>
            <input className="year-input" type="number" size="4" placeholder={props.placeholder}></input>
        </div>
    );
}

export default Year;