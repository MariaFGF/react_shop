import React from 'react';
import a from './main.module.css'
function PrMain(){
    return(
        <div class={a.div}> 
            <div class={a.div1}>
                 <div class={a.div2}>
                     <div class={a.left}>
                        <div>

                        <img class={a.img_left} src="./img/2023-10-30_11-08-47.png"/>
                        
                        </div>
                        <div class={a.t_db}>
                            <div><h1 class={a.db}>Добро пожаловать в</h1><h1 class={a.cocteil}>Cocteil</h1></div>
                            <div>
                            <h2 class={a.t}>Экономим Ваше время! </h2>
                            <h2 class={a.t}>Предлагаем лучшие цены! </h2>
                            <h2 class={a.t}>Доставляем в кратчайшие сроки!</h2>
                            </div>
                           
                        </div>

                    </div>
                    <div class={a.jeans}>
                    <img class={a.img_right} src="./img/rectangle-21.png"/>
                    </div>
                </div>
                <div class={a.btns}>
                    <button class={a.btns1}><h3 class={a.k}>Каталог</h3>
                    <svg class={a.strelkakat} xmlns="http://www.w3.org/2000/svg" width="80" height="8" viewBox="0 0 80 8" fill="none">
                    <path id= "Arrow 8" d="M79.3536 4.35355C79.5488 4.15829 79.5488 3.84171 79.3536 3.64645L76.1716 0.464466C75.9763 0.269204 75.6597 0.269204 75.4645 0.464466C75.2692 0.659728 75.2692 0.976311 75.4645 1.17157L78.2929 4L75.4645 6.82843C75.2692 7.02369 75.2692 7.34027 75.4645 7.53553C75.6597 7.7308 75.9763 7.7308 76.1716 7.53553L79.3536 4.35355ZM0 4.5H79V3.5H0V4.5Z" fill="#514A7E"/>
                    </svg>
                    </button>
                </div>
            </div>
           
        </div>
    )
}
export{PrMain}