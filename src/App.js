import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './Header';

import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment'
import Orders from './Orders';

import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const promise = loadStripe('pk_test_51IVztaCFAWB2guHBbZ2dsvMRpYvtZ8HoiCzTZ0zn9dCbkRJIpHD0x6aiHiUCzF186t4L48j2lz9Wf6yo8ie8dNEk00Opc7FNRq');  // test key so can be left visible use .env wehn switching to real stripe key

 
function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will run once when the app component loads because the [] are empty. you could add [user, basket to use it eevery time it updates]
    auth.onAuthStateChanged(authUser => {
      console.log('authUser', authUser);

      if (authUser) {
        //the user just logged in  was logged in.
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the use is logged out.
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
      

    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login" >
            <Login />
          </Route>

          <Route path="/checkout" > 
            <Header />           
            <Checkout />
          </Route>

          <Route path="/payment" > 
            <Header /> 
            <Elements stripe={promise} >
              <Payment />
            </Elements>          
          </Route>

          <Route path="/orders" >
            <Header />
            <Orders />
          </Route>
          
          {/* DEFAULT ROUTE AT THE BOTTOM */}
          <Route path="/" >
            <Header />           
            <Home />
          </Route>
          
        </Switch>       
      </div>
    </Router>
  );
}

export default App;
