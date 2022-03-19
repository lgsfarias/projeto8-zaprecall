import React, { useState, useEffect } from 'react';
import './Card.css';
import setinha from '../../assets/images/setinha.svg';

const Card = (props) => {
    const {
        pergunta,
        resposta,
        numero,
        setConcluidos,
        concluidos,
        sequencia,
        setSequencia,
        cards,
        setFinalizado,
        setNaoLembrou,
        acertou,
    } = props;
    const [etapa, setEtapa] = useState('escondido');
    const [resultado, setResultado] = useState('naoRespondido');
    const [virado, setVirado] = useState(false);

    useEffect(() => {
        setFinalizado(cards.length === concluidos);
    });

    switch (etapa) {
        case 'escondido':
            return (
                <div
                    className={`card-escondido ${resultado}`}
                    onClick={() => {
                        if (resultado === 'naoRespondido') {
                            setEtapa('pergunta');
                        }
                    }}
                >
                    <p>Pergunta {numero + 1}</p>
                    {resultado === 'naoRespondido' && (
                        <ion-icon name="play-outline"></ion-icon>
                    )}
                    {resultado === 'naoLembro' && (
                        <ion-icon name="close-circle"></ion-icon>
                    )}
                    {resultado === 'quaseNaoLembrei' && (
                        <ion-icon name="help-circle"></ion-icon>
                    )}
                    {resultado === 'zap' && (
                        <ion-icon name="checkmark-circle"></ion-icon>
                    )}
                </div>
            );
        case 'pergunta':
            return (
                <div className={`card ${virado ? 'virado' : ''}`}>
                    <div className="card-pergunta face">
                        <p>{pergunta}</p>
                        <img
                            id="setinha"
                            src={setinha}
                            alt="setinha"
                            onClick={() => setVirado(true)}
                        />
                    </div>
                    <div className="card-resposta face">
                        <p>{resposta}</p>
                        <div className="opcoes">
                            <div
                                className="opcao red"
                                onClick={() => {
                                    setEtapa('escondido');
                                    setResultado('naoLembro');
                                    setConcluidos(concluidos + 1);
                                    setSequencia([
                                        ...sequencia,
                                        <div
                                            className="naoLembro"
                                            key={Math.random()}
                                        >
                                            <ion-icon name="close-circle"></ion-icon>
                                        </div>,
                                    ]);
                                    setNaoLembrou(true);
                                }}
                            >
                                <p>Não lembrei</p>
                            </div>
                            <div
                                className="opcao orange"
                                onClick={() => {
                                    setEtapa('escondido');
                                    setResultado('quaseNaoLembrei');
                                    setConcluidos(concluidos + 1);
                                    setSequencia([
                                        ...sequencia,
                                        <div
                                            className="quaseNaoLembrei"
                                            key={Math.random()}
                                        >
                                            <ion-icon name="help-circle"></ion-icon>
                                        </div>,
                                    ]);
                                    acertou();
                                }}
                            >
                                <p>Quase não lembrei</p>
                            </div>
                            <div
                                className="opcao green"
                                onClick={() => {
                                    setEtapa('escondido');
                                    setResultado('zap');
                                    setConcluidos(concluidos + 1);
                                    setSequencia([
                                        ...sequencia,
                                        <div
                                            className="zap"
                                            key={Math.random()}
                                        >
                                            <ion-icon name="checkmark-circle"></ion-icon>
                                        </div>,
                                    ]);
                                    acertou();
                                }}
                            >
                                <p>Zap!</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        default:
            break;
    }
};

export default Card;
