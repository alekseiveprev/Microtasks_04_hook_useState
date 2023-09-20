import { useState } from 'react';
import { FC } from 'react';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  let [a, setA] = useState(1);

  const onClickHandler = () => {
    setA(++a);
    console.log(a);
  };

  let [b = setA, setB] = useState();
  const resetAHandler = () => {
    //setB(b = 0);
    console.log(b);
  };

  /* let [b, setB] = useState(a);
  const resetAHandler = () => {
     setB((a = 0));
    console.log(b);
  }; */

  return (
    <div>
      <h1>{a}</h1>
      <button onClick={onClickHandler}>number</button>
      <button onClick={resetAHandler}>0</button>
    </div>
  );
};
