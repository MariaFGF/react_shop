import React from 'react';
import a from './basket.module.css'
import { MasBasket } from './basket_mas'
import { Basket } from './profile3'


function PrBasket(){
    return(
        <div class={a.obb_div}>

            <div>
            <svg class = {a.strn} xmlns="http://www.w3.org/2000/svg" width="63" height="63" viewBox="0 0 63 63" fill="none">
                <circle cx="31.5" cy="27.5" r="21.5" transform="rotate(-90 31.5 27.5)" fill="#514A7E"/>
                <path id = "навзад" d="M22.6464 27.6464C22.4512 27.8417 22.4512 28.1583 22.6464 28.3536L25.8284 31.5355C26.0237 31.7308 26.3403 31.7308 26.5355 31.5355C26.7308 31.3403 26.7308 31.0237 26.5355 30.8284L23.7071 28L26.5355 25.1716C26.7308 24.9763 26.7308 24.6597 26.5355 24.4645C26.3403 24.2692 26.0237 24.2692 25.8284 24.4645L22.6464 27.6464ZM40 27.5L23 27.5L23 28.5L40 28.5L40 27.5Z" fill="#FFFDF5"/>
            </svg>
            </div>

            <div>
            <h1>Корзина</h1>
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
            <button class = {a.btnz}>Заказать</button>
            </div>

            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
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