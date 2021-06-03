import React, { useState } from 'react';
import Address from './Address/Address';
import Summary from './Summary/Summary'
import './Form.css'


const Form = (props) => {

    // const saveBool = bool => {
    //     bool.preventDefault();
    //     props.goToPayment(bool);
    // }

    const [enteredEmail, setEnteredEmail] = useState('');

    const titleChangeHandler = (e) => {
        e.preventDefault();
        setEnteredEmail(e.target.value);
    }

    const saveAddressHandler = (enteredAddress) => {
        const userData = [{
            ...enteredAddress,
            email: enteredEmail
        }];
        submitHandler(userData);
        // console.log("Your are in Form" + userData);
    };

    const submitHandler = (data) => {
        // e.preventDefault();
        console.log("Your are in Handler" + [data]);
        props.goToPayment(data);
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
                                onChange={titleChangeHandler}></input>
                            <div className='checkbox-container'>
                                <input className='checkbox' type='checkbox'></input>
                                <span className='checkboxText'>Keep me up to date on news and exclusive offers</span>
                            </div>
                        </div>
                        <Address onSaveAddress={saveAddressHandler} />
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