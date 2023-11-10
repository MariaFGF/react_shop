import React from 'react';
import './App.css';

import { CrOpener } from './header/opener/open';
import { CrMain } from './header/main/main.jsx';
import { CrBasket } from './header/basket/basket.jsx';
import { CrRegistration } from './header/registration/registration.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter>
    <div>
      <div class='div'>
        {/* <CrOpener/> 
        <CrHeader/>
        <CrMain/>
        <CrBasket/>
        <CrRegistration/> */}
        <Routes>
          <Route path = '/x' element = {<CrMain/>}/> 
          <Route path = '/Регистрация' element = {<CrRegistration/>}/>
          <Route path = '/' element = {<CrOpener/>}/> 
          <Route path = '/x1' element = {<CrMain/>}/>
          <Route path = '/vk' element = {<CrMain/>}/>
        </Routes> 
      </div>
    </div>
    </BrowserRouter>
      
  );
}

export default App;
