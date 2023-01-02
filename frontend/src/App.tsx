import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        Test
        <Route path="/" element={<Form />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
