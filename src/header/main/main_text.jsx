import React from 'react';
import a from './main.module.css'
function PrText(){
    return(
        <div class={a.div}>

            <div>
            <h1 class = {a.h1}>Почему выбирают нас?</h1>
            </div>

            <div class ={a.text}>
                <div class={a.text_vs_img}>
                    <div>
                        <h3 class={a.spk}>Скидки постоянным клиентам от 5%</h3>
                    </div>
                    <img class={a.img_krug1} src="./img/Ellipse 4.svg"/>
                </div>
                <div>
                    <h2 class={a.text_vs_img1}>Предлагаем самые выгодные цены</h2>
                </div>
                <div>
                    <h2 class={a.text_vs_img2}>Наши покупатели всегда остаются довольны</h2>
                    <img class={a.img_krug2} src="./img/Ellipse 6.png"/>
                   
                </div>
                <div>
                    <h2 class={a.text_vs_img3}>Ширикий ассортимент товаров для всей семьи</h2>
                </div>
                {/* <div class={a.polukr}> <img class={a.polukr} src="./img/Ellipse 2.png"/></div>   */}
            </div>

            <div class ={a.text1}>
                <div class={a.text1_1}>
                    <section>
                    <div class={a.krug_strelka}>
                        <img class={a.img_krug3} src="./img/наверх.svg"/>
                    </div>
                    </section>
                    
                    <div><h2 class={a.vd}>Возможность доставки в любой город России</h2>
                        <img class={a.img_krug4} src="./img/Ellipse 4.svg"/>
                    </div>

                    <div >
                        <div><h2 class={a.pv}>Пункты выдачи заказов рядом с домом</h2>
                        <img class={a.img_krug5} src="./img/Ellipse 4.svg"/>
                        </div>
                    </div>

                    <div class={a.krug_message}>
                        <img class={a.img_krug6}  src="./img/Group 82.png "/>
                    </div>
                    
                </div>       
            </div>
        </div>
    )
}

// const goTopbtn = document.querySelector(".img_krug3")

// goTopbtn.addEventListener("click", goTop)

// function goTop() {
//     if (window.pageYOffset > 0) {
//         window.scrollBy (0, -75)
//         setTimeout(goTop, 0)
//     }
// }

export{PrText}