import './Button.css';
const Button = (props) => {
    const { disabled = false, handleClick, mensagem } = props;
    return (
        <>
            {disabled ? (
                <button onClick={handleClick} disabled>
                    {mensagem}
                </button>
            ) : (
                <button onClick={handleClick}>{mensagem}</button>
            )}
        </>
    );
};

export default Button;
