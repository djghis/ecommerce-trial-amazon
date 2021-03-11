import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG21.png" alt="" />    
            </Link>  

            <div className="login__container">
                <h1>Sign-in</h1>
                
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button className="login__signInButton">Sign-in</button>
                </form>

                <p>
                    By siging-in you agree to Funky Frog's conditions of use & sale. Please see out privacy notice, our cookies notice and our interest based ads notice.
                </p>

                <button className="login__registerButton">Create an account</button>

            </div>     
        </div>
    )
}

export default Login
