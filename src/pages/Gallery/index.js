import React from 'react';
import classes from './Gallery.module.css';

const Gallery = () => {
    return (
        <>
            <h1 className={classes.title}>This is the Gallery Page.</h1>
            <div className={classes.gridContainer}>
                <img
                    src='https://media.giphy.com/media/6UFgdU9hirj1pAOJyN/giphy.gif'
                    alt='this is the way'
                    className={classes.gridItem}
                ></img>
                <img
                    src='https://media.giphy.com/media/1WprDBazmsM8M/giphy.gif'
                    alt='Vader'
                    className={classes.gridItem}
                ></img>
                <img
                    src='https://media.giphy.com/media/3o6QL6BkYYlWuu66oE/giphy.gif'
                    alt='Iron Man'
                    className={classes.gridItem}
                ></img>
                <img
                    src='https://media.giphy.com/media/1Nclw5CJ3N77G/giphy.gif'
                    alt='Thor'
                    className={classes.gridItem}
                ></img>
            </div>
        </>
    );
};

export default Gallery;
