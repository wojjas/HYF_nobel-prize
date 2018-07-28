import React, { Component } from 'react';
import './PrizeList.css';

function PrizeList(props) {
    const prizes = props.prizes.map(prize => {
        const laureatesHtml = prize.laureates.map(laureate => {
            return (
                <div>
                    <div className="laureate-title">{laureate.surname} {laureate.firstname}</div>
                    <div className="laureate-motivation">{laureate.motivation}</div>
                </div>
            );
        });

        return (
            <li className="prize">
                <div className="prize-title">
                    {prize.year} {prize.category} {prize.overallMotivation ? ', ' + prize.overallMotivation : ''}
                </div>
                <div>
                    {laureatesHtml}
                </div>
            </li>);
    });

    return (
        <ul className="prize-list">
            {prizes}
        </ul>
    );
}

export default PrizeList;