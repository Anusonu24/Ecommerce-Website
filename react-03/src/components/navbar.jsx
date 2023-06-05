import React from 'react'
import { link }  from "rout-router-dom";
import  { shoppingCart }from 'phosphor-react'

export const navbar = () => {
  return (
    <div className="navbar">
        <div classaname="navbar">
            <div classanme="link">
               <link to="/"> shop </link>
               <link to="/cart">
                <shoppingCart size={32} />
                
                
                 </link>
            </div>
        </div>
    </div>
  )
}
