import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'


function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left" >
                <img className="checkout__ad" 
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/BankPromotions/UnionPay/2019/September/EN/Gateway-banner-02-1500_300-EN._CB452587450_.jpg"
                alt="ad from amazon" />

                <div>
                    <h2 className="checkout__title">Your shopping basket</h2>
                </div>

            </div>

            <div className="checkout__right" >
                <Subtotal />
                <h2>The subtotal will go here</h2>
            </div>
        </div>
    )
}

export default Checkout
