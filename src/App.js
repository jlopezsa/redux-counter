import React from 'react';
import { useState } from 'react';
import './App.css';
import ButtonAdd from './components/ButtonAdd';
import ButtonRemove from './components/ButtonRemove';
import Counter from './components/Counter';

function App() {
  // Declaración de una variable de estado que llamaremos "count"
  // count es una variable que contiene el estado actual
  // setCount es una función que actualiza la variable count
  const [count, setCount] = useState(5);

  const handleAdd = () =>{
    console.log(count)
    setCount(count + 1)
  }
  const handleRemove = () =>{
    setCount(count - 1)
  }

  return (
    <div className="App">
      <h2>Example of a single counter</h2>
      <h2>using Redux</h2>
      <hr />
      <Counter counter={count} />  {/*prop count es uun valor}*/}
      <div className='buttons'>
        <ButtonAdd handleAdd={handleAdd} />  {/*prop handleAdd} es una fuunción*/}
        <ButtonRemove handleRemove={handleRemove} />
      </div>
      <hr />
    </div>
  );
}

export default App;
