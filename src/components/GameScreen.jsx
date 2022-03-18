import React, { useState } from 'react';
import Card from './Card';
import Footer from './Footer';
import Header from './Header';
import './GameScreen.css';

const GameScreen = (props) => {
    const { decks, setScreen, selectedDeck, acertos, setAcertos, meta } = props;
    const [concluidos, setConcluidos] = useState(0);
    const [sequencia, setSequencia] = useState([]);
    const [finalizado, setFinalizado] = useState(false);
    const [naoLembrou, setNaoLembrou] = useState(false);
    let cards = decks[selectedDeck];
    cards.sort(() => Math.random() - 0.5);

    function acertou() {
        setAcertos(acertos + 1);
    }

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
                    acertou={acertou}
                />
            ))}
            <Footer
                cards={cards}
                concluidos={concluidos}
                sequencia={sequencia}
                finalizado={finalizado}
                naoLembrou={naoLembrou}
                setScreen={setScreen}
                acertos={acertos}
                setAcertos={setAcertos}
                meta={meta}
            />
        </div>
    );
};

export default GameScreen;
