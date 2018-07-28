import React, { Component } from 'react';
import './Year.css';

/**
 * Functional component, see https://reactjs.org/docs/components-and-props.html
 * 
 * @param {Object} props 
 */
function Year(props) {
    function onYearChange(e) {
        props.onYearChange(e.target.value);
    }

    return (
        <div className="year">
            <label className="year-label">{props.label}</label>
            <input className="year-input"
                type="number" size="4"
                placeholder={props.placeholder}
                value={props.year}
                onChange={onYearChange}>
            </input>
        </div>
    );
}

export default Year;