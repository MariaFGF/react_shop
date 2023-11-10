import React from 'react';
import './App.css';

import { CrOpener } from './header/opener/open';
import { CrMain } from './header/main/main.jsx';
import { CrHeader } from './header/header1/header1.jsx';
// import { CrBasket } from './header/basket/basket.jsx';
import { CrRegistration } from './header/registration/registration.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter>
    <div>
      <div class='div'>
      <CrOpener/>
        <CrHeader/>
        <CrMain/>
        <Routes>
          <Route path = '/' element = {<CrMain/>}/>
          {/* <Route path = '/Корзина' element = {<CrBasket/>}/>
          <Route path = '/Избранное' element = {<gbfgb/>}/>
          <Route path = '/Вход' element = {<CrOpener/>}/> */}
          <Route path = 'Регистрация' element = {<CrRegistration/>}/>
        </Routes>
        {/* <CrBasket/> */}
        <CrRegistration/>
      </div>
    </div>
    </BrowserRouter>
      
  );
}

export default App;
