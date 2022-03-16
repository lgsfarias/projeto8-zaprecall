import './ClosedCard.css';

const ClosedCard = (props) => {
    const { numero } = props;
    return (
        <div className="card">
            <p>Pergunta {numero}</p>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    );
};

export default ClosedCard;
