import React from 'react';
import './App.css';
import Results from './components/Results/Results';
import Filters from './components/Filters/Filters';

function App() {
  const [value, setValue] = React.useState([2, 30]);
  return (
    <div className='App'>
      <Filters value={value} setValue={setValue} />
      <Results value={value} />
    </div>
  );
}

export default App;
