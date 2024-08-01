import './App.css';
import Homepage from './page/Homepage.js';
import AboutPage from './page/AboutPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';

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
                    <Route path="/products" element={<ProductPage />} />
                    <Route path="/products/:id" element={<ProductDetailPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
