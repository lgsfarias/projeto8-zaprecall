import ClosedCard from './ClosedCard';
import Footer from './Footer';
import Header from './Header';
import './Screen2.css';

const Screen2 = () => {
    const perguntas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className="screen2-container">
            <Header />
            {perguntas.map((elem) => (
                <ClosedCard numero={elem} />
            ))}
            <Footer />
        </div>
    );
};

export default Screen2;
