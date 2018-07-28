import React, { Component } from 'react';
import './Category.css';

/**
 * Functional component, see https://reactjs.org/docs/components-and-props.html
 * 
 * @param {Object} props 
 */
function Category(props) {
    function handleCategoryChange(e){
        props.onCategorySelected(e.target.value);
    }

    return (
        <div className="category">
            <label className="category-label">{props.label}</label>
            <select className="category-select" value={props.selected} onChange={handleCategoryChange}>
                <option value="">All</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
                <option value="medicine">Medicine</option>
                <option value="peace">Peace</option>
                <option value="literature">Literature</option>
                <option value="economics">Economics</option>
            </select>
        </div>
    );
}

export default Category;