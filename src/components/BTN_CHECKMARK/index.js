import React from 'react';
import checkmark from './Group -1.svg';
import './btn_checkmark_style.css';

const Btn_Checkmark = ({ isActive }) => {
    return (
        <div id='check'>
            <img
                src={checkmark}
                alt="Button's Checkmark"
                className={isActive ? 'checkmark ' : 'non-active'}
            />
        </div>
    );
};

export default Btn_Checkmark;
