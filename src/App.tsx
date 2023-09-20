import { useState } from 'react';
import { FC } from 'react';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  let [a, setA] = useState(1);

  const onClickHandler = () => {
    setA(++a);
    console.log(a);
  };

  //рабочий вариант1
  let [b = setA, setB] = useState();
  const resetAHandler = () => {
    setA(0);
  };

  //рабочий вариант2
  /*  let [b, setB] = useState();
  const resetAHandler = () => {
    setA(0);    
  }; */

  return (
    <div>
      <h1>{a}</h1>
      <button onClick={onClickHandler}>number</button>
      <button onClick={resetAHandler}>0</button>
    </div>
  );
};
