import React, { useEffect, useState } from 'react';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import Quote from '../../components/quote/Quote';

import './MainContainer.css';

const MainContainer = () => {

    const [quote, setQuote] = useState('');
    const [isLoadedQuotes, setIsLoadedQuotes] = useState(false);

    const getQuotes = async () => {
        const url = 'https://type.fit/api/quotes';
        try {
            const response = await fetch(url);
            const quotes = await response.json();

            //TODO: Get the quotes lenth and generate a random index.
            const index = 28;

            if (quotes && quotes.length > 0) {
                setQuote(quotes[index]);
            }

            setIsLoadedQuotes(true);
            console.log('Quotes => ', quotes);
            console.log('Random Quote => ', quote);
        } catch (error) {
            debugger;
        }
    };

    useEffect(() => {
        if (!isLoadedQuotes) {
            getQuotes();
        }
    }, [setQuote])

    //TODO: Add to the BackgroundImage component a category attribute and then
    // the BackgroundImage will render an image related to the category.
    // e.g. technology, nature, people, etc...
    return (
        <div className="MainContainer">
            <BackgroundImage />
            <Quote quote={quote}/>
        </div>
    )
};


export default MainContainer;