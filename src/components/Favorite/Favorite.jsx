import React, { useState } from 'react'
import scss from './Favorite.module.scss'
import { useSelector } from 'react-redux'
import photoOne from '../../assets/photo1.png'
import { useActions } from '../../hooks/useActions'

const Favorite = () => {
  const { cart, visible } = useSelector((state => state))
  console.log(visible);
  const { removeFromCart, close } = useActions()
  console.log(cart);

  return (
    <div className={visible.isVisible ? scss.Favorite : scss.Favorite_active}>
      {cart.items.map((el) => (
        <div key={el.id} onClick={() => removeFromCart(el.id)}>
          <img src={photoOne} alt="" />
          <div>
            <h6>{el.price}</h6>
            <p>{el.title}</p>
          </div>
        </div>
      ))}
      <span onClick={() => close()}></span>
    </div>
  )
}

export default Favorite