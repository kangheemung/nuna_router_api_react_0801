import React from 'react';
import { useNavigate } from 'react-router-dom';

function AboutPage() {
    const navigate = useNavigate();
    const goToHompage = () => {
        //함수 안에서 사용시 추천
        navigate('/');
    };
    return (
        <div>
            <h1>AboutPage</h1>
            <button onClick={goToHompage}>Go To Homepage</button>
        </div>
    );
}

export default AboutPage;
