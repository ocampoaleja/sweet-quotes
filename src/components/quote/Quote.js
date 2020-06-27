import React from 'react';

import './Quote.css';

const Quote = (props) => {
    if (!props.quote) {
        return (<div></div>);
    }

    return (
        <div className="Quote">
            <h2 className="Quote__text">{props.quote.text}</h2>
            <blockquote className="Quote__author">- {props.quote.author}</blockquote>
        </div>
    )
};


export default Quote;