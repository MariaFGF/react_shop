import React from 'react';
import a from './main.module.css'
import {Mas} from './mas.jsx'
import {PrBuy} from './profile.jsx'
// console.log(Mas[1].price)
function Buy(){
    return(
    <div class={a.div}>
        <div>
            <h1 class={a.y}>Успейте купить!</h1>
            <h1 class={a.a}>Акции</h1>
        </div>
        <section class={a.tovar}>
            {
              Mas.map(m=>(
                <PrBuy img={m.img} 
                price={m.price} 
                old_price={m.old_price}
                category={m.category}
                ozenka={m.ozenka}/>
              ))
            }
        </section>
    </div>
    )
}
export{Buy}