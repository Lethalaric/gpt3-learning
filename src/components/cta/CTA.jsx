import React from 'react';
import './cta.css';

function CTA(props) {
    return (
        <div className="gpt3__CTA section__margin">
            <div className="gpt3__CTA-content">
                <p>Request Early Access to Get Started</p>
                <h4>Register today & start exploring the endless possiblities.</h4>
            </div>
            <div className="gpt3__CTA-button">
                <button>Get Started</button>
            </div>
        </div>
    );
}

export default CTA;