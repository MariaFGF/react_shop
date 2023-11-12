import React from 'react';
import a from './main.module.css'
import { CrHeader } from './header1'
import { PrText } from './main_text'
import { PrMain } from './main_main'
import { Buy } from './main_buy'
import { Otz } from './main_otz'

function CrMain(){
    return(
        <div class={a.ob_div}>
              <CrHeader/>
              <PrMain/>
              <PrText/>
              <Buy/>
              <Otz/>
        </div>
      
    )
}

export{CrMain}