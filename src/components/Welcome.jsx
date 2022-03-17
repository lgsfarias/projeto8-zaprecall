// import React, { useState, useEffect } from 'react';
import './Welcome.css';
import Button from './Button';

const Welcome = (props) => {
    const { setScreen } = props;
    return (
        <div className="welcome-container">
            <img src="./images/logo.png" alt="logo" />
            <h1>ZapRecall</h1>
            <Button
                {...props}
                handleClick={() => setScreen('Screen2')}
                mensagem={'Iniciar Recall!'}
            />
        </div>
    );
};

export default Welcome;
