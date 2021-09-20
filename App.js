import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/login/Login';
import Preferences from './components/Preferences';
import useToken from './components/App/useToken';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
      <Switch>
        <Route path='/dashboard'>
        <Dashboard />
        </Route>
        <Route path='/Preferences'>
        <Preferences />
        </Route>
      </Switch>
      </BrowserRouter>
              </div>
  );
}

export default App;
