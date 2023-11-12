import React from 'react';
import a from './main.module.css'
import {MasOtz} from './mas_otz.jsx'
import {PrOtz} from './profile1.jsx'
function Otz(){
  return(
    <div class = {a.okn}>
      <h1 class={a.o}>Отзывы наших покупателей</h1> 

      <section class={a.otz}>
      {
        MasOtz.map(m=>(
        <PrOtz imgs={m.imgs} 
        input={m.input} 
        name={m.name}
        date={m.date}
        ozenkas={m.ozenkas}/>
        ))
      }
      </section>

      <button class={a.btn_otz}>Добавить отзыв</button> 

      <div class = {a.knopka}>
      <svg class = {a.knopka} xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none">
      <circle cx="46" cy="46" r="45.5" stroke="#514A7E"/>
      <path id = "кнопка" d="M65.159 47.8619C65.3543 47.6666 65.3543 47.35 65.159 47.1547L61.9771 43.9728C61.7818 43.7775 61.4652 43.7775 61.27 43.9728C61.0747 44.168 61.0747 44.4846 61.27 44.6799L64.0984 47.5083L61.27 50.3367C61.0747 50.532 61.0747 50.8486 61.27 51.0438C61.4652 51.2391 61.7818 51.2391 61.9771 51.0438L65.159 47.8619ZM27.1475 48.0083H64.8055V47.0083H27.1475V48.0083Z" fill="#514A7E"/>
      </svg>
      </div>

    </div>
  )
}
export{Otz}