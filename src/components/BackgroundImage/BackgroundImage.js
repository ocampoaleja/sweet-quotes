import React from 'react';
import './BackgroundImage.css';

const BackgroundImage = (props) => {
    //TODO: Plese read the unsplash API
   
    const styles = {
        backgroundImage: `url(https://source.unsplash.com/1600x800/?${props.categories})`
    }
    
    console.log(props.categories)
    return (
        <div className="BackgroundImage" style={styles}></div>
    )
};


export default BackgroundImage;