import React from 'react';
import a from './favourites.module.css'
import { CrHeader } from './header2'
import { PrFavourites } from './fav_main'

function CrFavourites(){
    return(
        <div class={a.obf_div}>
            <CrHeader/>
            <PrFavourites/>
        </div>
      
    )
}

export{CrFavourites}