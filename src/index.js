import React from 'react';
import ReactDOM from 'react-dom/client';
import TagManager from 'react-gtm-module';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const tagManagerArgs = {
    gtmId: 'GTM-MMBS767',
};

TagManager.initialize(tagManagerArgs);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter basename='/gtm-project'>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
