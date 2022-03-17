import './Footer.css';

const Footer = (props) => {
    const { concluidos, cards, sequencia } = props;
    return (
        <div className="footer-container">
            <p>
                {concluidos}/{cards.length} CONCLUÍDOS
            </p>
            <div className="sequencia">{sequencia}</div>
        </div>
    );
};

export default Footer;
