import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store'
import './App.scss';
import Routes from './Routes';

function App() {
  return (
      <Provider store= { store }>
        <BrowserRouter>
          <Routes></Routes>
        </BrowserRouter>
      </Provider> 
  );
}

export default App;
