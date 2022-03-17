import './Button.css';
const Button = (props) => {
    const { handleClick, mensagem } = props;
    return <button onClick={handleClick}>{mensagem}</button>;
};

export default Button;
