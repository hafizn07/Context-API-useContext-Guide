import React, { useContext } from 'react'
import CartContext from '../CartContext';
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { blueGrey } from '@mui/material/colors';
import '../App.scss'

export const Nav = () => {
    const { items } = useContext(CartContext)
    return (
        <nav>
            <div className="nav__logo">
                <Link to={'/'}>
                    ContextAPI
                </Link>
            </div>
            <div className="nav__links">
                <Link to={'/checkout'}>
                    <ShoppingCartIcon fontSize="large" sx={{ color: blueGrey[500] }} />
                    <span>{items.length}</span>
                </Link>
            </div>
        </nav>
    )
}
