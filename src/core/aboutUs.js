import React, { useEffect, useState } from 'react';

import Navigation from './Navigation'
import { GiRetroController,GiBoneGnawer,GiMouthWatering,GiBlackHandShield  } from "react-icons/gi";
import "./aboutUs.css"

const about = () => {

  const carrusel = () => (
    <div>
       <form className="frm">

<input type="radio" name="fancy" autofocus value="clubs" id="clubs" />
<input type="radio" name="fancy" value="hearts" id="hearts" />
<input type="radio" name="fancy" value="spades" id="spades" />
<input type="radio" name="fancy" value="diamonds" id="diamonds" />			
<label  className="lb" for="clubs"> <GiRetroController/> GAMERS</label><label className="lb" for="hearts"> <GiBoneGnawer/> DON'T DIE</label><label className="lb" for="spades"> <GiMouthWatering/> THEY</label><label className="lb" for="diamonds"> <GiBlackHandShield />RESPAWN</label>

<div class="keys">Use left and right keys to navigate</div>
</form> 
    </div>
  )

  



  return (
    <>
      <Navigation/>
      <div>
      {carrusel ()}
      
      </div>

      
      
     
    </>
  )
}

export default about;