import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/templates/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route
          path='*'
          component={() => (
            <h1 style={{ textAlign: 'center' }}>you are lost!</h1>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
