import React, { useState } from 'react';
import Summary from './Summary/Summary'
import './Form.css'

const Form = (props) => {

    //HOOK to get user's email 
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredFirstName, setEnteredFirst] = useState('');
    const [enteredSecondName, setEnteredSecond] = useState('');
    const [enteredAddress, setEnteredAddress] = useState('');
    const [enteredCity, setEnteredCity] = useState('');
    const [enteredProvince, setEnteredProvince] = useState('');



    //hook handler to save what user is typing
    const emailHandler = (e) => {
        e.preventDefault();
        setEnteredEmail(e.target.value);
    }
    const firstNameChangeHandler = (e) => {
        e.preventDefault();
        setEnteredFirst(e.target.value);
    }
    const secondNameChangeHandler = (e) => {
        e.preventDefault();
        setEnteredSecond(e.target.value);
    }
    const addressChangeHandler = (e) => {
        e.preventDefault();
        setEnteredAddress(e.target.value);
    }
    const cityChangeHandler = (e) => {
        e.preventDefault();
        setEnteredCity(e.target.value);
    }
    const provinceChangeHandler = (e) => {
        e.preventDefault();
        setEnteredProvince(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = {
            email: enteredEmail,
            firstName: enteredFirstName,
            secondName: enteredSecondName,
            address: enteredAddress,
            city: enteredCity,
            state: enteredProvince
        }

        console.log("Your are in Handler");
        console.log(formData);
        props.goToPayment(formData, true);

        setEnteredEmail('');
        setEnteredFirst('');
        setEnteredSecond('');
        setEnteredAddress('');
        setEnteredCity('');
        setEnteredProvince('');
    };

    return (
        <>
            {/* FORM */}
            <div className='form-container'>
                <div className='form'>
                    <form onSubmit={submitHandler}>
                        <div className='contactText'>
                            <h2 className='contactInfo'>Contact Info</h2>
                            <span className='account'>Already have an account? </span>
                            <a className='account-a'> Log In</a>
                        </div>
                        <div>
                            <input className='email-input'
                                type='text'
                                placeholder='Email'
                                value={enteredEmail}
                                onChange={emailHandler}></input>
                            <div className='checkbox-container'>
                                <input className='checkbox' type='checkbox'></input>
                                <span className='checkboxText'>Keep me up to date on news and exclusive offers</span>
                            </div>
                        </div>
                        {/* ADDRESS */}
                        <div className='address-container'>
                            <h2 className='shippingAddress'>Shipping Address</h2>
                            <div>
                                <input className='address-input'
                                    type='text'
                                    placeholder='First name'
                                    value={enteredFirstName}
                                    onChange={firstNameChangeHandler} />
                                <input className='address-input'
                                    type='text'
                                    placeholder='Last name'
                                    value={enteredSecondName}
                                    onChange={secondNameChangeHandler} />
                            </div>
                            <div>
                                <input className='email-input'
                                    type='text'
                                    placeholder='Address'
                                    value={enteredAddress}
                                    onChange={addressChangeHandler}
                                />
                            </div>
                            <div>
                                <input className='email-input'
                                    type='text'
                                    placeholder='Unit - apt, suite (optional)'
                                />
                            </div>
                            <div>
                                <input className='email-input'
                                    type='text'
                                    placeholder='City'
                                    value={enteredCity}
                                    onChange={cityChangeHandler} />
                            </div>
                            <div>
                                <input className='country-input'
                                    type='text'
                                    placeholder='Province'
                                    value={enteredProvince}
                                    onChange={provinceChangeHandler}
                                />
                                <input className='country-input'
                                    type='text'
                                    placeholder='Postal Code'
                                />
                            </div>
                            <div>
                                <input className='email-input'
                                    type='text'
                                    placeholder='Phone Number'
                                />
                            </div>
                        </div>
                        <button type='submit' className='proceed-btn'>Proceed to payment</button>
                    </form>
                </div>
                {/* <Summary onClickGetBool = {saveBool}/>  */}
                <Summary />
            </div>
        </>
    );
}

export default Form;