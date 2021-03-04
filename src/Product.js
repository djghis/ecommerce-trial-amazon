import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>The lean Startup</p>
                <p className="product__price">
                    <small>£</small>
                    <strong>10.95</strong>
                </p>
                <div className="product__rating">
                    <p>⭐</p>
                </div>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/41Ag4WE7uyL._SX324_BO1,204,203,200_.jpg" alt="book over"/>

            <button>Add to basket</button>
        </div>
    )
}

export default Product
