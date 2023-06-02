import React from 'react';
import Dropdown from './Dropdown';
import './app.css';
function App() {
  const dropdownItems = ['Yes', 'Probably not', 'cannot decide'];

  return (
    <div className='container'>
      <h1>Dropdown</h1>
      <Dropdown items={dropdownItems} />
    </div>
  );
}

export default App;
