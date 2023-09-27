import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Header from './Header';
import Trending from './Trending';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/> 
      <Trending/>
    </>
  );
}

export default App;
