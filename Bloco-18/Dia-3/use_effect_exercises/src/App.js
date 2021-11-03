import './App.css';
import React, { useState, useEffect } from 'react';

// A cada 10 segundos ele gera e exibe na tela um número aleatório de 1 a 100;
// Se o número for múltiplo de 3 ou 5, uma mensagem "Acerto" é exibida na tela;
// A mensagem de acerto é removida 4 segundos depois de ser exibida;
// O timer é removido quando o componente é desmontado.

function App() {
  const [random, setRandom] = useState(0);
  const [msg, setMsg] = useState(null);
  const [isMultiple, setIsMultiple] = useState(false);


  const max = 100;
  const min = 0;
  const timer = 10000;
  const FOUR_SECONDS = 4000;

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
   const changeNumber = setInterval(() => setRandom(getRandomIntInclusive(min, max)), timer)
   return () => {
    clearInterval(changeNumber);
  }
  }, []
  );

  useEffect(() => {
    if ((random % 3 === 0 || random % 5 === 0) && random > 0) {
      setMsg('acerto!');
      setIsMultiple(true);
    } else {
      setMsg(null);
      setIsMultiple(false);
    }
  }, [random]);

  useEffect(() => {
    if (isMultiple) {
     setTimeout(() => setMsg(null), FOUR_SECONDS) ;
    }
  }, [isMultiple, random]);

  return (
    <div>
      <span>
        {random}
      </span>
      <span>
        {msg}
      </span>
    </div>
  );
}

export default App;
