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


            const index =parseInt(Math.random() * url.length);


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


    const categories= ['technology','music','art']

    return (
        <div className="MainContainer">
            <BackgroundImage categories={categories}/>
            <Quote quote={quote}/>
        </div>
    )
};


export default MainContainer;