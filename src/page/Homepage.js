import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';

function Homepage() {
const navigate=useNavigate();
const goProductpage = () => {
navigate('/product/?q=pants')
}
    return (
        <div>
            <h1>Homepage</h1>
<Link to="/about">Go to about page</Link>
<button onClick={goProductpage}>gotoProductpage</button>
        </div>
    );
}

export default Homepage;
