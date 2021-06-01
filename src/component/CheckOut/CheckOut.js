import React from 'react';
import Cart from './ShoppingCart/ShoppingCart';
import PageTracker from './PageTracker/PageTracker';
import './CheckOut.css';

const CheckOut = (props) => {
    return (
        <>
            <Cart/>
            <PageTracker/>
            {/* FORM */}
            <div className='form-container'>
                <div className='form'>
                    <form>
                        <div className='contactText'>
                            <h2 className='contactInfo'>Contact Info</h2>
                            <span className='account'>Already have an account? </span>
                            <a className='account'> Log In</a>
                        </div>
                        <div>
                            <input className='email-input' type='text' placeholder='Email' />
                            <div className='checkbox-container'>
                                <input className='checkbox' type='checkbox'></input>
                                <span className='checkboxText'>Keep me up to date on news and exclusive offers</span>
                            </div>
                        </div>
                        {/* ADDRESS */}
                        <div className='address-container'>
                            <h2 className='shippingAddress'>Shipping Address</h2>
                            <div>
                                <input className='address-input' type='text' placeholder='First name' />
                                <input className='address-input' type='text' placeholder='Last name' />
                            </div>
                            <div>
                                <input className='email-input' type='text' placeholder='Address' />
                            </div>
                            <div>
                                <input className='email-input' type='text' placeholder='Unit - apt, suite (optional)' />
                            </div>
                            <div>
                                <input className='email-input' type='text' placeholder='City' />
                            </div>
                            <div>
                                <input className='country-input' type='text' placeholder='Province' />
                                <input className='country-input' type='text' placeholder='Postal Code' />
                            </div>
                            <div>
                                <input className='email-input' type='text' placeholder='Phone Number' />
                            </div>
                        </div>
                    </form>
                </div>
                {/* SUMMARY */}
                <div className='summary'>
                    <h4 className='summary-text'>Summary</h4>
                    <div className='subtotal-container'>
                        <p className='subtotal'>Subtotal:</p>
                        <span className='money'>$700.00</span>
                    </div>
                    <div className='subtotal-container'>
                        <p className='subtotal'>Shipping:</p>
                        <span className='money'>$42.00</span>
                    </div>
                    <hr></hr>
                    <div className='subtotal-container'>
                        <p className='subtotal'>Total:</p>
                        <span className='total-money'>
                            <span className='currency'>CAD</span>
                            $742.00</span>
                    </div>
                    <button className='proceed-btn'>Proceed to payment</button>
                </div>
            </div>
        </>
    );
};

export default CheckOut;