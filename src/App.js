import React from 'react';
import './App.css';

import { CrOpener } from './header/opener/open';
import { CrMain } from './header/main/main.jsx';
import { CrBasket } from './header/basket/basket.jsx';
import { CrRegistration } from './header/registration/registration.jsx';
import { CrFavourites } from './header/favourites/favourites.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter>
    <div>
      <div class='div'>
        {/* <CrOpener/> 
        <CrMain/>
        <CrBasket/>
        <CrRegistration/>
        <CrFavourites/> */}
        <Routes>
          <Route path = '/x' element = {<CrMain/>}/> 
          <Route path = '/Регистрация' element = {<CrRegistration/>}/>
          <Route path = '/' element = {<CrOpener/>}/> 
          <Route path = '/x1' element = {<CrMain/>}/>
          <Route path = '/vk' element = {<CrMain/>}/>
          <Route path = '/Корзина' element = {<CrBasket/>}/>
          <Route path = '/Избранное' element = {<CrFavourites/>}/>
        </Routes> 
      </div>
    </div>
    </BrowserRouter>
      
  );
}

export default App;
