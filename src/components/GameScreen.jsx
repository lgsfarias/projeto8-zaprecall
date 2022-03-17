import React, { useState } from 'react';
import Card from './Card';
import Footer from './Footer';
import Header from './Header';
import './GameScreen.css';

const GameScreen = (props) => {
    const { decks, setScreen, selectedDeck } = props;
    const [concluidos, setConcluidos] = useState(0);
    const [sequencia, setSequencia] = useState([]);
    const [finalizado, setFinalizado] = useState(false);
    const [naoLembrou, setNaoLembrou] = useState(false);
    let cards = decks[selectedDeck];
    cards.sort(() => Math.random() - 0.5);

    return (
        <div className="GameScreen-container">
            <Header />

            {cards.map((elem, index) => (
                <Card
                    {...elem}
                    key={index}
                    numero={index}
                    cards={cards}
                    setConcluidos={setConcluidos}
                    concluidos={concluidos}
                    sequencia={sequencia}
                    setSequencia={setSequencia}
                    setFinalizado={setFinalizado}
                    setNaoLembrou={setNaoLembrou}
                />
            ))}
            <Footer
                cards={cards}
                concluidos={concluidos}
                sequencia={sequencia}
                finalizado={finalizado}
                naoLembrou={naoLembrou}
                setScreen={setScreen}
            />
        </div>
    );
};

export default GameScreen;
