import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Route ,BrowserRouter,  Routes} from 'react-router-dom'


ReactDOM.render(

  <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<App/>}/>
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);


