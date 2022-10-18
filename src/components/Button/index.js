import React, { useState } from 'react';
import './Button.css';
import BTN_CHECKMARK from '../BTN_CHECKMARK';
import ButtonPic from '../../assets/images/ACCREDITED_BUILDER.svg';

function Button(props) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = (event) => {
        setIsActive((current) => !current);
    };

    return (
        <>
            <button
                onClick={handleClick}
                id='save-btn'
                className={
                    isActive
                        ? 'reward-details button-clicked'
                        : 'reward-details'
                }
                key='test-button'
                value='test-button'
                savings='test-button'
            >
                <BTN_CHECKMARK isActive={isActive} />
                <div className='reward-savings'>
                    <img
                        src={ButtonPic}
                        alt='button'
                        className='button-image'
                    />
                    <p className='button-name'>Test Button</p>
                    <div
                        className={
                            isActive ? 'reward-value-shadow' : 'reward-value'
                        }
                    >
                        <p className='info-text'>SAVE $15</p>
                    </div>
                </div>
                <div className='i-image'>i</div>
            </button>
        </>
    );
}

export default Button;
