import './Header.css';
import logoPequeno from '../../assets/images/logo-pequeno.png';

const Header = () => {
    return (
        <div className="header-container">
            <img src={logoPequeno} alt="logo-pequeno" />
            <h2>ZapRecall</h2>
        </div>
    );
};

export default Header;
