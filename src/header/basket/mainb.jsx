import React from 'react';
import a from './basket.module.css'
import { CrHeader } from './header3'
import { PrBasket } from './bas_main'

function CrBasket(){
    return(
        <div class={a.obb_div}>
              <CrHeader/>
              <PrBasket/>
        </div>
      
    )
}

export{CrBasket}