import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
    const [{ basket, user }] = useStateValue();
    
    return (
        <div className="checkout">
            <div className="checkout__left" >
                <img className="checkout__ad" 
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/BankPromotions/UnionPay/2019/September/EN/Gateway-banner-02-1500_300-EN._CB452587450_.jpg"
                alt="ad from amazon" />

                <div>
                <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your shopping basket</h2>

                    {basket.map(item => (
                        <CheckoutProduct
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                         />
                    ))}

                    
                </div>

            </div>

            <div className="checkout__right" >
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
