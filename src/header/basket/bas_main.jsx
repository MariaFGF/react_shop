import React from 'react';
import a from './basket.module.css'
import { MasBasket } from './basket_mas'
import { Basket } from './profile3'


function PrBasket(){
    return(
        <div class={a.obb_div}>

          <div>
          <button class = {a.strn}><svg class = {a.strn1} xmlns="http://www.w3.org/2000/svg" width="26" height="4" viewBox="0 0 26 4" fill="none">
          <path id = "Arrow 9.1" d="M25.1768 2.17678C25.2744 2.07915 25.2744 1.92085 25.1768 1.82322L23.5858 0.232233C23.4882 0.134602 23.3299 0.134602 23.2322 0.232233C23.1346 0.329864 23.1346 0.488155 23.2322 0.585786L24.6464 2L23.2322 3.41421C23.1346 3.51184 23.1346 3.67014 23.2322 3.76777C23.3299 3.8654 23.4882 3.8654 23.5858 3.76777L25.1768 2.17678ZM0 2.25H25V1.75H0V2.25Z" fill="#FFFDF5"/>
          </svg></button>
          </div>

          <div>
          <h1 class = {a.k}>Корзина</h1>
          </div>

          <div> 
          <section class={a.tovb}>
            {
              MasBasket.map(m=>(
                <Basket id={m.user}
                img={m.img} 
                name={m.name} 
                articlenumber={m.articlenumber} 
                color={m.color} 
                size={m.size} 
                kol={m.kol}
                price={m.price}/>
              ))
            }
          </section>
          </div>

          <div>
            <h2 class = {a.itog}>Итого:</h2>
          </div>

          <div>
            <button class = {a.btnz}>Заказать</button>
          </div>

          <div>
          <svg class = {a.kr} xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
          <circle cx="3.5" cy="3.5" r="3.25" stroke="#514A7E" stroke-width="0.5"/>
          </svg>
          <button class = {a.btnc}>Согласен с условиями правил пользования торговой площадкой и правилами возврата</button>            
          </div>

          <div>
            <img class={a.krug_strelka} src="./img/наверх.svg"/>
          </div>


        </div>
      
    )
}

export{PrBasket}