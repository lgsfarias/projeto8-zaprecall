// import React, { useState, useEffect } from 'react';
import './Welcome.css';

const Welcome = (props) => {
    const { setScreen } = props;
    return (
        <div className="welcome-container">
            <img src="./images/logo.png" alt="logo" />
            <h1>ZapRecall</h1>
            <button onClick={() => setScreen('Screen2')}>
                Iniciar Recall!
            </button>
        </div>
    );
};

export default Welcome;
