import React from 'react';
import './Contador.css';

const Contador = (props) => {
    const { max, meta, setMeta } = props;
    return (
        <div className="contador">
            <div
                className="decrementar"
                onClick={() => {
                    if (meta > 0) {
                        setMeta(meta - 1);
                    }
                }}
            >
                -
            </div>
            <div className="valor">{meta}</div>
            <div
                className="incrementar"
                onClick={() => {
                    if (meta < max) {
                        setMeta(meta + 1);
                    }
                }}
            >
                +
            </div>
        </div>
    );
};

export default Contador;
