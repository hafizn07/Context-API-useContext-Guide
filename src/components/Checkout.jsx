import React, { useContext } from 'react'
import CartContext from '../CartContext'

export const Checkout = () => {

    const { items } = useContext(CartContext);

    return (
        <div className='checkout__container'>
            <h2>Checkout</h2>
            <div className="checkout__items">
                {items.map((item, index) => (
                    <div key={index}>
                        <img src={item.thumb} alt="" />
                        <h2>{item.name}</h2>
                        <h3>{item.price}</h3>
                    </div>
                ))
                }
            </div>
        </div>
    )
}
