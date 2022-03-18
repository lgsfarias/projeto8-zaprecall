// import React, { useState, useEffect } from 'react';
import Button from './Button';
import './Footer.css';

const Footer = (props) => {
    const {
        concluidos,
        cards,
        sequencia,
        finalizado,
        naoLembrou,
        setScreen,
        acertos,
        setAcertos,
        meta,
    } = props;

    if (!finalizado) {
        return (
            <div className="footer-container">
                <p>
                    {concluidos}/{cards.length} CONCLUÍDOS
                </p>
                <div className="sequencia">{sequencia}</div>
            </div>
        );
    } else {
        if (meta === 0) {
            return (
                <div className="footer-container">
                    {naoLembrou ? (
                        <div className="congrats">
                            <div>
                                <img src="./images/sad.png" alt="sad" />{' '}
                                <p>PUTZ!</p>
                            </div>
                            <p>Ainda faltaram alguns...Mas não desanime!</p>
                        </div>
                    ) : (
                        <div className="congrats">
                            <div>
                                <img src="./images/party.png" alt="party" />{' '}
                                <p>PARABÉNS!</p>
                            </div>
                            <p>Você não esqueceu de nenhum flashcard!</p>
                        </div>
                    )}
                    <div className="sequencia">{sequencia}</div>
                    <Button
                        handleClick={() => {
                            setAcertos(0);
                            setScreen('Welcome');
                        }}
                        mensagem={'REINICIAR RECALL'}
                    />
                </div>
            );
        } else {
            return (
                <div className="footer-container">
                    {acertos < meta ? (
                        <div className="congrats">
                            <div>
                                <img src="./images/sad.png" alt="sad" />{' '}
                                <p>PUTZ!</p>
                            </div>
                            <p>
                                Infelizmente não atingiu a meta por{' '}
                                {meta - acertos === 1
                                    ? '1 card'
                                    : `${meta - acertos} cards`}
                                ...Mas não desanime!
                            </p>
                        </div>
                    ) : (
                        <div className="congrats">
                            <div>
                                <img src="./images/party.png" alt="party" />{' '}
                                <p>PARABÉNS!</p>
                            </div>
                            <p>Você atingiu a sua meta de acertos!</p>
                        </div>
                    )}
                    <div className="sequencia">{sequencia}</div>
                    <Button
                        handleClick={() => {
                            setAcertos(0);
                            setScreen('Welcome');
                        }}
                        mensagem={'REINICIAR RECALL'}
                    />
                </div>
            );
        }
    }
};

export default Footer;
