import React, {useState} from 'react';
import Counter from './components/Counter';


import './App.css';

function App() {

   const [state, setstate] = useState(12)
   const [value, setValue] = useState("Hello")

   
  return (
    <Counter/>
  );
}

export default App;
