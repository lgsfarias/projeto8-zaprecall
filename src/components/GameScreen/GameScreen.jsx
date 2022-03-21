import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './GameScreen.css';

const GameScreen = (props) => {
    const { decks, setScreen, selectedDeck, acertos, setAcertos, meta } = props;
    const [concluidos, setConcluidos] = useState(0);
    const [sequencia, setSequencia] = useState([]);
    const [finalizado, setFinalizado] = useState(false);
    const [naoLembrou, setNaoLembrou] = useState(false);
    const [iniciado, setIniciado] = useState(false);
    const [cards, setCards] = useState(decks[selectedDeck]);

    function acertou() {
        setAcertos(acertos + 1);
    }

    console.log(cards);
    console.log(iniciado);

    useEffect(() => {
        if (iniciado === false) {
            let shuffledCards = cards;
            shuffledCards.sort(() => Math.random() - 0.5);
            setCards(shuffledCards);

            setIniciado(true);
        }
    }, [iniciado, cards]);

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
                    iniciado={iniciado}
                    setIniciado={setIniciado}
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
                setIniciado={setIniciado}
            />
        </div>
    );
};

export default GameScreen;
