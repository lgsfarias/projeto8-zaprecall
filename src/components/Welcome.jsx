import Button from './Button';
import './Welcome.css';

const Welcome = () => {
    return (
        <div className="welcome-container">
            <img src="./images/logo.png" alt="logo" />
            <h1>ZapRecall</h1>
            <Button />
        </div>
    );
};

export default Welcome;
