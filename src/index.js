import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import About from './components/About';
import Search from './components/Search';
import Aarti from './components/Aarti';
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/search' element={<Search />} />
      <Route path='/:god/:type' element={<Aarti />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
