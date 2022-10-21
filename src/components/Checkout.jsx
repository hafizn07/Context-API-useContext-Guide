import React, { useContext } from 'react'
import CartContext from '../CartContext'

export const Checkout = () => {

    const { items } = useContext(CartContext);

    return (
        <div className="checkout__container">
            <h2>Checkout</h2>
            <div className="product__container">
                {items.map((item, index) => (
                    <div key={index} className="cards__area">
                        <div className="cards__img">
                            <img src={item.thumb} alt={item.name} />
                        </div>
                        <div className="cards__details">
                            <h3>{item.name}</h3>
                            <p>${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
