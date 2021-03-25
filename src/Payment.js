import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';

import './Payment.css';
import CheckoutProduct from './CheckoutProduct';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './Reducer';
import axios from './axios';
import {db} from './firebase';


function Payment() {
    const history = useHistory();

    const [{user, basket}, dispatch] = useStateValue();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false); 
    const [clientSecret, setClientSecret] = useState(true);  //for stripe

    //get a request to stripe to allow the payment to go thru. It will run everytime the basket get updated with the right amount.
    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`  //stripe needs the money in pennies not pounds
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret(); //to run the function
    }, [basket])

    console.log(`clientSecret`, clientSecret);

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit =async (e) => {
        e.preventDefault();
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            //paymentIntent = payment confirmation from stripe
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        }) 
    }

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

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
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">
                            <CurrencyFormat
                                renderText={(value) => (                                    
                                    <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"£"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                            </div>
                            {/* Error catcher */}
                            {error && <div>{error}</div> }
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
