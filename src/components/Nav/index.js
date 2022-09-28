import React from 'react';
import classes from './Nav.module.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <nav className={classes.nav}>
                <h1>GTM Project</h1>
                <Link to='/'>Home</Link>
                <Link to='about'>About</Link>
                <Link to='gallery'>Gallery</Link>
            </nav>
        </>
    );
};

export default Nav;
