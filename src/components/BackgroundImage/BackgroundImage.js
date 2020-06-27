import React from 'react';
import './BackgroundImage.css';

const BackgroundImage = () => {
    //TODO: Plese read the unsplash API
    const styles = {
        backgroundImage: 'url(https://source.unsplash.com/1600x800/?technology)'
    };

    return (
        <div className="BackgroundImage" style={styles}></div>
    )
};


export default BackgroundImage;