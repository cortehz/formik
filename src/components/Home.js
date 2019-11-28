import React from 'react';
import {Link} from 'react-router-dom';
import  './home.css';


function Home() {
  return (
    <div className="App">
        <div className="container">
            <p style={{fontSize:"30px", textAlign:"center"}}>
            "Paradise isn't a place It's a feeling"
            </p>
            <p style={{textAlign:"right"}}>- L. Boyer</p>

            <div className="links">
                    <Link
                    to="/signin"
                    >
                    I have an account
                    </Link>
                    <Link
                    to="/signup"
                    >
                        Create an account
                    </Link>
            </div>
        </div>    
    </div>
  );
}

export default Home;
