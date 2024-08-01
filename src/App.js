import './App.css';
import Homepage from './page/Homepage.js';
import AboutPage from './page/AboutPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    //루트를 작성
    //페이지 여러개 작성
    //

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
