import React, { useState } from 'react';
import Welcome from './components/Welcome';
import './App.css';
import Screen2 from './components/Screen2';

const App = () => {
    const [screen, setScreen] = useState('Welcome');

    return (
        <>
            {screen === 'Welcome' && <Welcome setScreen={setScreen} />}
            {screen === 'Screen2' && <Screen2 />}
        </>
    );
};

export default App;
