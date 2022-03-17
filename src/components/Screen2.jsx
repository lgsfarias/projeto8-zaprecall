import React, { useState } from 'react';
import Card from './Card';
import Footer from './Footer';
import Header from './Header';
import './Screen2.css';

const Screen2 = () => {
    // const perguntas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const cards = [
        {
            pergunta: 'O que é JSX?',
            resposta: 'Uma extensão de linguagem do JavaScript',
        },
        {
            pergunta: 'O React é __',
            resposta: 'uma biblioteca JavaScript para construção de interfaces',
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
            resposta: 'gerenciar os pacotes necessários e suas dependências',
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
    ];
    const [concluidos, setConcluidos] = useState(0);
    const [sequencia, setSequencia] = useState([]);

    return (
        <div className="screen2-container">
            <Header />
            {cards.map((elem, index) => (
                <Card
                    {...elem}
                    key={index}
                    numero={index}
                    setConcluidos={setConcluidos}
                    concluidos={concluidos}
                    sequencia={sequencia}
                    setSequencia={setSequencia}
                />
            ))}
            <Footer
                cards={cards}
                concluidos={concluidos}
                sequencia={sequencia}
            />
        </div>
    );
};

export default Screen2;
