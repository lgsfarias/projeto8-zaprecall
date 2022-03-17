import React, { useState } from 'react';
import Welcome from './components/Welcome';
import './App.css';
import GameScreen from './components/GameScreen';

const App = () => {
    const decks = {
        React: [
            {
                pergunta: 'O que é JSX?',
                resposta: 'Uma extensão de linguagem do JavaScript',
            },
            {
                pergunta: 'O React é __',
                resposta:
                    'uma biblioteca JavaScript para construção de interfaces',
            },
            {
                pergunta: 'Componentes devem iniciar com __ ',
                resposta: 'letra maiúscula',
            },
            {
                pergunta: 'Podemos colocar __ dentro do JSX',
                resposta: 'expressões',
            },
            {
                pergunta: 'O ReactDOM nos ajuda __',
                resposta:
                    'interagindo com a DOM para colocar componentes React na mesma',
            },
            {
                pergunta: 'Usamos o npm para __',
                resposta:
                    'gerenciar os pacotes necessários e suas dependências',
            },
            {
                pergunta: 'Usamos props para __ ',
                resposta: 'passar diferentes informações para componentes ',
            },
            {
                pergunta: 'Usamos estado (state) para __',
                resposta:
                    'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
            },
        ],
        Geografia: [
            {
                pergunta: 'Em que continente fica o Brasil?',
                resposta: 'America do Sul.',
            },
            {
                pergunta: 'O que é lixiviação?',
                resposta: 'É quando a água leva os nutrientes do solo embora.',
            },
            {
                pergunta: 'A terra roxa se encontra na região __',
                resposta: 'Sul.',
            },
        ],
    };

    const [selectedDeck, setSelectedDeck] = useState('');
    const [screen, setScreen] = useState('Welcome');

    return (
        <>
            {screen === 'Welcome' && (
                <Welcome
                    decks={decks}
                    setScreen={setScreen}
                    setSelectedDeck={setSelectedDeck}
                    selectedDeck={selectedDeck}
                />
            )}
            {screen === 'GameScreen' && (
                <GameScreen
                    decks={decks}
                    setScreen={setScreen}
                    selectedDeck={selectedDeck}
                />
            )}
        </>
    );
};

export default App;
