import React from 'react';
import './SelectDeck.css';

const SelectDeck = (props) => {
    const { selectedDeck, setSelectedDeck, decks, setMeta } = props;
    const deckNames = Object.keys(decks);

    return (
        <select
            name="Cars"
            defaultValue={selectedDeck}
            onChange={(e) => {
                setSelectedDeck(e.target.value);
                setMeta(0);
            }}
        >
            <option value="" disabled>
                Escolha seu deck
            </option>
            {deckNames.map((deckName) => (
                <option value={deckName} key={deckName}>
                    {' '}
                    {deckName}{' '}
                </option>
            ))}
        </select>
    );
};

export default SelectDeck;
