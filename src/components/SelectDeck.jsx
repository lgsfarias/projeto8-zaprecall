import React from 'react';
import './SelectDeck.css';

const SelectDeck = (props) => {
    const { selectedDeck, setSelectedDeck, decks } = props;
    const deckNames = Object.keys(decks);

    return (
        <select
            name="Cars"
            defaultValue={selectedDeck}
            onChange={(e) => {
                setSelectedDeck(e.target.value);
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
