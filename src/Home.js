import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/ElInternadoS1/ELINT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB659172682_.jpg"
                    alt="amazon prime video" />

                <div className="home__row">
                    <Product
                        id="1"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/41Ag4WE7uyL._SX324_BO1,204,203,200_.jpg"
                        rating={2}    
                    />
                     <Product
                        id="2"
                        title="Rocketbook Everlast Smart Reusable Notebook - A5 Executive - Black, Dotted, Pilot FriXion Pen and Wipe Included"
                        price={19.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/711V73cWWRL._AC_SX425_.jpg"
                        rating={3}    
                    />
                    {/* Product */}
                </div>
                <div className="home__row">
                    <Product
                        id="4"
                        title="PhoneSoap 3 UV Cell Phone Sanitizer and Dual Universal Cell Phone Charger | Patented and Clinically Proven UV Light Sanitizer | Cleans and Charges All Phones - Silver"
                        price={13.02}
                        image="https://images-na.ssl-images-amazon.com/images/I/71r44u6yQCL._AC_SX569_.jpg"
                        rating={2}    
                    />
                     <Product
                        id="5"
                        title="CONQUECO Heated Vest Slim Fit Electric Heating Gilet With Battery Pack in Winter Warm for Outdoor Camping Hiking Hunting"
                        price={45.23}
                        image="https://images-na.ssl-images-amazon.com/images/I/61MpzN7rcHL._AC_UX385_.jpg"
                        rating={1}    
                    />
                     <Product
                        id="6"
                        title="Lamicall Laptop Stand, Adjustable Notebook Riser - Foldable Portable Ergonomic Desktop Laptop Holder for MacBook Air Pro, Dell XPS, HP, Lenovo, iPad, Other Notebooks and Tablets - Silver"
                        price={9.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71gSTKmTfwL._AC_SX466_.jpg"
                        rating={5}    
                    />
                </div>
                <div className="home__row">
                <Product
                        id="7"
                        title="CooSpo Heart Rate Monitor Bluetooth ANT+ with Chest Strap for Running Cycling Gym and other Sports"
                        price={3.20}
                        image="https://images-na.ssl-images-amazon.com/images/I/71bqnyyOTJL._AC_SY450_.jpg"
                        rating={4}    
                    /> 
                </div>
            </div>
        </div>
    )
}

export default Home
