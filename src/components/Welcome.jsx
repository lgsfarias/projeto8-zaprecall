import React, { useState, useEffect } from 'react';
import './Welcome.css';
import Button from './Button';
import SelectDeck from './SelectDeck';

const Welcome = (props) => {
    const { selectedDeck, setScreen, setSelectedDeck, decks } = props;
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (selectedDeck) {
            setDisabled(false);
        }
    }, [selectedDeck]);

    return (
        <div className="welcome-container">
            <img src="./images/logo.png" alt="logo" />
            <h1>ZapRecall</h1>
            <SelectDeck
                decks={decks}
                setSelectedDeck={setSelectedDeck}
                selectedDeck={selectedDeck}
            />
            <Button
                {...props}
                disabled={disabled}
                handleClick={() => setScreen('GameScreen')}
                mensagem={'Iniciar Recall!'}
            />
        </div>
    );
};

export default Welcome;
