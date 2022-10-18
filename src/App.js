import './App.css';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import { useEffect } from 'react';

function App() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'Pageview',
        page_location: {
            url: window.location.href,
            title: document.title,
        },
    });

    useEffect(() => {
        console.log(window.dataLayer);
    });
    return (
        <div className='App'>
            <Nav />
            <Routes>
                <Route index element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='gallery' element={<Gallery />} />
            </Routes>
        </div>
    );
}

export default App;

/*  
    In GA event tracking, we work with four variables: category, action, label, 
    and value. To track events in React we need to push a new element into the
    data layer that contains the variables that we want. 
    For example:


*/
