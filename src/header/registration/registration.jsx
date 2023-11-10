import a from './registration.module.css'
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
            <button class={a.btn}>Отправить<svg class={a.img} xmlns="http://www.w3.org/2000/svg" width="26" height="4" viewBox="0 0 26 4" fill="none">
            <path d="M25.1768 2.17678C25.2744 2.07915 25.2744 1.92085 25.1768 1.82322L23.5858 0.232233C23.4882 0.134602 23.3299 0.134602 23.2322 0.232233C23.1346 0.329864 23.1346 0.488155 23.2322 0.585786L24.6464 2L23.2322 3.41421C23.1346 3.51184 23.1346 3.67014 23.2322 3.76777C23.3299 3.8654 23.4882 3.8654 23.5858 3.76777L25.1768 2.17678ZM0 2.25H25V1.75H0V2.25Z" fill="#FFFDF5"/>
            </svg></button>
            <button class={a.btn1}>Войти в кабинет</button>
            <div class={a.img2}><img class={a.img2} src="./img/Ellipse 2.png"/></div> 
        </div>

        <div class = {a.btn2} >
            <button type = 'button'> X </button>
        </div>

    </div>
</div>
    )
 }
 export{CrRegistration}