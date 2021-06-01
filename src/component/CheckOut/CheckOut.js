import React from 'react';
import './CheckOut.css';

const CheckOut = (props) => {
    return (
        <>
            <div>
                <div className='header-placeholder'>
                    <h2>Header</h2>
                </div>
                {/* SHOPPING CART */}
                <h3 className='cart-title'>Shopping Cart</h3>
                <div className='shopping-cart-container'>
                    <div className='productList-container'>
                        <div className='image'>
                            {/* <img/> */}
                        </div>
                        <div className='product-description'>
                            <span className='product-text'>Product</span>
                            <div className='description-text'>
                                <p>hi</p>
                            </div>
                        </div>
                        <div className='quantity'>
                            <span className='product-text'>Quantity</span>
                            <p>x <span className='quantity-number'>1</span></p>
                        </div>
                        <div className='total'>
                            <span className='product-text'>Total</span>
                            <p>$798.00 CAD</p>
                        </div>
                        <div className='remove'>
                            <span className='product-text'>Remove</span>
                            <div className='trashBin'>
                                {/* <img/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* FORM */}
            <div className='form-container'>
                <div className='form'>
                    <form>
                        <div className='contactText'>
                            <h2 className='contactInfo'>Contact Info</h2>
                            <span className='account'>Already have an account? </span>
                            <a className='account'> Log In</a>
                        </div>
                        <input className='email-input' type='text' placeholder='Email'/>
                    </form>
                </div>
                <div className='summary'>

                </div>
            </div>
        </>
    );
};

export default CheckOut;