import React, { useState, useEffect } from 'react';
import './Welcome.css';
import Button from './Button';
import SelectDeck from './SelectDeck';
import Contador from './Contador';

const Welcome = (props) => {
    const { selectedDeck, setScreen, setSelectedDeck, decks, meta, setMeta } =
        props;
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
                setMeta={setMeta}
            />
            {selectedDeck ? (
                <>
                    <p className="deck-description">
                        Este deck tem {decks[selectedDeck].length} cartas
                    </p>
                    <p className="deck-description">Defina uma meta:</p>
                    <Contador
                        max={decks[selectedDeck].length}
                        meta={meta}
                        setMeta={setMeta}
                    />
                </>
            ) : (
                <p className="deck-description">Selecione um deck</p>
            )}
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
