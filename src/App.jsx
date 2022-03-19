import React, { useState } from 'react';
import Welcome from './components/Welcome/Welcome';
import GameScreen from './components/GameScreen/GameScreen';

const App = () => {
    const decks = {
        React: [
            {
                pergunta: 'O que é JSX?',
                resposta: 'Uma extensão de linguagem do JavaScript',
            },
            {
                pergunta: 'O React é __',
                resposta:
                    'uma biblioteca JavaScript para construção de interfaces',
            },
            {
                pergunta: 'Componentes devem iniciar com __ ',
                resposta: 'letra maiúscula',
            },
            {
                pergunta: 'Podemos colocar __ dentro do JSX',
                resposta: 'expressões',
            },
            {
                pergunta: 'O ReactDOM nos ajuda __',
                resposta:
                    'interagindo com a DOM para colocar componentes React na mesma',
            },
            {
                pergunta: 'Usamos o npm para __',
                resposta:
                    'gerenciar os pacotes necessários e suas dependências',
            },
            {
                pergunta: 'Usamos props para __ ',
                resposta: 'passar diferentes informações para componentes ',
            },
            {
                pergunta: 'Usamos estado (state) para __',
                resposta:
                    'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
            },
        ],
        HTML: [
            {
                pergunta: 'indica o início e o fim de um documento html',
                resposta: '<html></html>',
            },
            {
                pergunta:
                    'indica o início e o fim do título: o título é exibido na barra de título do navegador',
                resposta: '<title></title>',
            },
            {
                pergunta: 'indica o início e o fim de uma lista não ordenada.',
                resposta: '<ul></ul>',
            },
            {
                pergunta:
                    'indica que o item que segue a tag é um item da lista',
                resposta: '<li></li>',
            },
            {
                pergunta:
                    'quebra uma linha de texto no ponto onde a tag aparece',
                resposta: '<br/>',
            },
            {
                pergunta:
                    'cria uma marca âncora que é usada para criar hiperlinks',
                resposta: '<a></a>',
            },
            {
                pergunta: 'pesquisa e exibe imagens em uma página da web',
                resposta: '<img>',
            },
            {
                pergunta:
                    'define uma lista de opções de seleção em um formulário',
                resposta: '<select></select>',
            },
            {
                pergunta: 'insere linha horizontal',
                resposta: '<hr>',
            },
            {
                pergunta: 'texto em negrito',
                resposta: '<b></b>',
            },
            {
                pergunta: 'texto em itálico',
                resposta: '<i></i>',
            },
        ],
        Linux: [
            {
                pergunta: 'pwd',
                resposta:
                    'Use o comando pwd para encontrar o caminho para o diretório atual (da pasta) em que você está',
            },
            {
                pergunta: 'ls',
                resposta: 'Listar arquivos no diretório',
            },
            {
                pergunta: 'rm',
                resposta: 'Remove os arquivos especificados',
            },
            {
                pergunta: 'cp',
                resposta: 'Copia arquivos especificados',
            },
            {
                pergunta: 'cd',
                resposta: 'altera o diretório',
            },
            {
                pergunta: 'cat',
                resposta:
                    ' Ele é usado para visualizar o conteúdo de um arquivo na saída padrão (sdout)',
            },
            {
                pergunta: 'mkdir',
                resposta: 'Use o comando mkdir para criar um novo diretório',
            },
            {
                pergunta: 'rmdir',
                resposta:
                    'Se você precisa apagar (deletar) um diretório, use o comando rmdir.',
            },
            {
                pergunta: 'touch',
                resposta:
                    'O comando touch permite criar novos arquivos em branco através de uma linha de comando',
            },
            {
                pergunta: 'sudo',
                resposta:
                    'Correspondente a SuperUser Do, o comando sudo permite que que você execute tarefas que exigem permissões root ou administrativas',
            },
        ],
    };
    const [acertos, setAcertos] = useState(0);
    const [meta, setMeta] = useState(0);
    const [selectedDeck, setSelectedDeck] = useState('');
    const [screen, setScreen] = useState('Welcome');

    return (
        <>
            {screen === 'Welcome' && (
                <Welcome
                    decks={decks}
                    setScreen={setScreen}
                    setSelectedDeck={setSelectedDeck}
                    selectedDeck={selectedDeck}
                    meta={meta}
                    setMeta={setMeta}
                />
            )}
            {screen === 'GameScreen' && (
                <GameScreen
                    decks={decks}
                    setScreen={setScreen}
                    selectedDeck={selectedDeck}
                    acertos={acertos}
                    setAcertos={setAcertos}
                    meta={meta}
                />
            )}
        </>
    );
};

export default App;
