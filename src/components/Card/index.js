import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'

function Card({ id, brand, category, description, discountPercentage, images, price, stock, thumbnail, title }) {
    return (
        <div className='col-3'>
            <div className="card">
                <Link style={{ textDecoration: 'none' }}
                    to={`/products/${id}`}>
                    <img src={thumbnail} alt="ProductImage" />
                    <h2 className='title'>{title}</h2>
                    <p className='category'>{category}</p>
                    <div className="price">
                        <span>$ {price}</span>
                    </div>
                </Link>
            </div>
        </div >
    )
}

export default Card