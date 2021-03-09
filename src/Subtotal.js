import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './Reducer';
import { useStateValue } from './StateProvider'
import './Subtotal.css'

function Subtotal() {

    const [{basket}] = useStateValue(); 
    
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* Subtotal (0 items): */}
                            Subtotal ({basket.length } items):
                            <strong>{` ${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift?
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                // value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"£"}
            />
            
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
