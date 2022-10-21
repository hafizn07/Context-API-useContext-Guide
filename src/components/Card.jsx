import React, { useContext } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CartContext from '../CartContext';

import '../App.scss'

export const Card = ({ name, price, thumb }) => {

    const { addToCart } = useContext(CartContext);

    return (
        <div className='cards__area'>
            <div className="cards__img">
                <img src={thumb} alt={name}/>
            </div>
            <div className="cards__details">
                <h3>{name}</h3>
                <p>${price}</p>
            </div>
            <div onClick={() => addToCart(name, price, thumb)} className='addtocart'><AddShoppingCartIcon /></div>

        </div>
    )
}
