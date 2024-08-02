import './App.css';
import { useState } from 'react';
import Homepage from './page/Homepage.js';
import AboutPage from './page/AboutPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import { LoginPage } from './page/LoginPage';
import UserPage from './page/UserPage';

function App() {
    //루트를 작성
    //페이지 여러개 작성
    //
    const [authenticate, setAuthenticate] = useState(false);

    const PrivateRoute = () => {
        return authenticate == true ? <UserPage /> : <Navigate to="/login" />;
    };

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/products" element={<ProductPage />} />
                    <Route path="/products/:id" element={<ProductDetailPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/userPage" element={<UserPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
