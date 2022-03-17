import React, { useState } from 'react';
import './Card.css';

const Card = (props) => {
    const {
        pergunta,
        resposta,
        numero,
        setConcluidos,
        concluidos,
        sequencia,
        setSequencia,
    } = props;
    const [etapa, setEtapa] = useState('escondido');
    const [resultado, setResultado] = useState('naoRespondido');

    switch (etapa) {
        case 'escondido':
            return (
                <div
                    className={`card ${resultado}`}
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
                <div className="card-pergunta">
                    <p>{pergunta}</p>
                    <img
                        id="setinha"
                        src="./images/setinha.svg"
                        alt="setinha"
                        onClick={() => setEtapa('resposta')}
                    />
                </div>
            );
        case 'resposta':
            return (
                <div className="card-resposta">
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
                                    <div className="zap" key={Math.random()}>
                                        <ion-icon name="checkmark-circle"></ion-icon>
                                    </div>,
                                ]);
                            }}
                        >
                            <p>Zap!</p>
                        </div>
                    </div>
                </div>
            );
        default:
            break;
    }
    // if (etapa === 'escondido') {
    //     return (
    //         <div className="card" onClick={() => console.log(numero)}>
    //             <p>Pergunta {numero}</p>
    //             <ion-icon name="play-outline"></ion-icon>
    //         </div>
    //     );
    // }
};

// <ion-icon name="checkmark-circle"></ion-icon>
// <ion-icon name="close-circle"></ion-icon>
// <ion-icon name="help-circle"></ion-icon>

export default Card;
