import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="container">
                <Link className='header_link_item' to="/">Logo</Link>
                <div className="header_link">
                    <Link className='header_link_item' to="/">Home</Link>
                    <Link className='header_link_item' to="/about">About</Link>
                    <Link className='header_link_item' to="/mans">Mans</Link>
                    <Link className='header_link_item' to="/womens">Womens</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
