import a from './registration.module.css'
import { NavLink } from "react-router-dom"

 function CrRegistration(){
    return(
<div class={a.div}>
    <h1 class = {a.reg}>Регистрация</h1>
    <div>
        <div class = {a.reg1}>
            <input type="text" placeholder='ФИО'></input>
            <input type="text" placeholder='Ваш полный адрес (только РБ)'></input>
        </div>
        
        <div class = {a.reg2}>
            <input type="text" placeholder='Контактный телефон'></input>
            <input type="text" placeholder='Электронная почта'></input>
        </div>

        <div class = {a.reg3}>
            <input type="text" placeholder='Индекс'></input>
            <input type="text" placeholder='Комментарий'></input>
        </div>

        <div class =  {a.btn3}>
            <button type = 'button'> Даю согласие на обработку персональных данных <svg class={a.img1} xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
            <circle cx="3.5" cy="3.5" r="3.25" stroke="#514A7E" stroke-width="0.5"/>
            </svg></button>
        </div>

        <div>
            <NavLink to = "/">
            <button class={a.btn}>Отправить<img class={a.img} src="./img/Arrow 9.1.svg"/></button>
            </NavLink>
            <NavLink to = "/">
            <button class={a.btn1}>Войти в кабинет</button>
            {/* <div class={a.img2}><img class={a.img2} src="./img/Ellipse 2.png"/></div>  */}
            </NavLink>
        </div>

        <div class = {a.btn2} >
            <NavLink to = "/x1">
            <button type = 'button'> X </button>
            </NavLink>
        </div>

    </div>
</div>
    )
 }
 export{CrRegistration}