import './Footer.css';

const Footer = (props) => {
    const { concluidos, cards, sequencia, finalizado, naoLembrou } = props;
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
            </div>
        );
    }
};

export default Footer;
