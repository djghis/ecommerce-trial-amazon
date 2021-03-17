import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';

function Payment() {
    const [{user, basket}, dispatch] = useStateValue();

    return (
        <div className="payment">
            
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length}</Link>
                    )
                </h1>
                <div className="payment__section" >
                    <div className="payment__title" >
                        <h3>Delivery adress</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>address line 1</p>
                        <p>line 2</p>
                        <p>line 3</p>
                    </div>
                </div>

                <div className="payment__section" >
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
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

                <div className="payment__section" >
                    <div className="payment__title" >
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details" >
                            {/* Stripe Payment */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
