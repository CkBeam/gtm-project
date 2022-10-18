import React from 'react';
import classes from './Home.module.css';

const Home = () => {
    const clickHandler = () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'test_button_event',
        });
    };

    return (
        <div>
            <h1>This is the Home Page.</h1>
            <p className={classes.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <button
                onClick={() => {
                    clickHandler();
                }}
            >
                Click me
            </button>
        </div>
    );
};

export default Home;
