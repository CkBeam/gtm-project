import React from 'react';
import classes from './Nav.module.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <nav className={classes.nav}>
                <h1>GTM Project</h1>
                <ul className={classes.navLinks}>
                    <li className={classes.linkItem}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={classes.linkItem}>
                        <Link to='about'>About</Link>
                    </li>
                    <li className={classes.linkItem}>
                        <Link to='gallery'>Gallery</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;
