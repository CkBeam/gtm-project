import './App.css';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';

function App() {
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
