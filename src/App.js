import { useState } from 'react';
import './App.css';
import ButtonAdd from './components/ButtonAdd';
import ButtonRemove from './components/ButtonRemove';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      <div className='buttons'>
        <ButtonAdd />
        <ButtonRemove />
      </div>

    </div>
  );
}

export default App;
