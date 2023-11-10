import React from 'react';
import { NavLink } from "react-router-dom"

const CrOpener = function(){
    return(
<div>
        <header class='App'>
        <h2>Вход в личный кабинет</h2>
      </header>

        <div class = "input">  
            <div class = "input1">
                <input type="text" placeholder='Электронная почта'></input>
            </div>

            <div class = "input2">
                <input type="text" placeholder='Пароль'/>
            </div>
        </div>

<div class = "button">

<div class = "button3" >
    <NavLink to = "">
    <button type = 'button'> Не помню пароль </button>
    </NavLink>
</div>

<div class = "button1" >
    {/* <NavLink to = ""> */}
    <button type = 'button'> Войти в кабинет</button>
    {/* </NavLink> */}
</div>

<div class = "button2" >
    <NavLink to = "Регистрация">
    <button type = 'button'> Регистрация </button>
    </NavLink>
</div>

<div class = "button4" >
    <NavLink to = "/">
    <button type = 'button'> X </button>
    </NavLink>
</div>

<div class="img"> <img class="img" src="./img/Ellipse 2.png"/></div>  

</div>
</div>
     
    )
}

export{CrOpener}