import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { Main } from './components/layout/Main';
import { Navbar } from './components/layout/Navbar';

import UserContext from './context/user';

import './App.scss';

function App() {
  return (
    <Router>
      <UserContext>
        <Navbar />
        <Main />
      </UserContext>
    </Router>
  );
}

export default App;
