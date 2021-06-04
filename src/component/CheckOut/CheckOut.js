import React, { useEffect, useState } from 'react';
import './CheckOut.css';

//Components
import Cart from './ShoppingCart/ShoppingCart';
import PageTracker from './PageTracker/PageTracker';
import Form from './Form/Form';
import Payment from './Payment/Payment';

const prevUserData = [];

const CheckOut = (props) => {

    //Boolean hook to define render
    const [isPayment, setIsPayment] = useState(false);
    const [userData, setUserDate] = useState('');


    //saving data and boolean from form
    const saveIsPaymentHandler = (udata, bool) => {
        // setIsPayment(bool);
        console.log('CHECKOUT');
        console.log(udata);
        setIsPayment(bool);
        setUserDate((prevUserData) => {
            return [udata, ...prevUserData]
        })
    }

    return (
        <>
            <Cart />
            <PageTracker />

            {/* Boolean to define render  */}
            {isPayment ? <Payment formData ={userData} /> : <Form goToPayment={saveIsPaymentHandler} />}
            {/* {isPayment ? <Payment /> : <Form />} */}
        </>
    );
};

export default CheckOut;