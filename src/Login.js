import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from './firebase';  //import from local firebase file;



function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        //Firebse login
        auth.signInWithEmailAndPassword(email, password).then(
            auth => {
                history.push('/')
            }).catch(
                error => alert(error.message)
            )        
    }

    const register = (e) => {
        e.preventDefault();
        //firebase register    createUserWithEmailAndPassword is a firebase functionName you cannot use another 1!
        auth.createUserWithEmailAndPassword(email, password).then
        ((auth) => {
            // console.log('auth', auth)
            if (auth) {
                history.push('/')  //used for redirecting to home or last page visited.
            }
        }).catch(
            error => alert(error.message)
        )
    }

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

                    <button type="submit"
                        onClick={signIn}
                         className="login__signInButton">Sign-in</button>
                </form>

                <p>
                    By siging-in you agree to Funky Frog's conditions of use & sale. Please see out privacy notice, our cookies notice and our interest based ads notice.
                </p>

                <button type="submit"
                 onClick={register}
                 className="login__registerButton">Create an account</button>

            </div>     
        </div>
    )
}

export default Login
