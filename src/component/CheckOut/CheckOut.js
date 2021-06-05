import React, { useEffect, useState } from 'react';
import './CheckOut.css';

//Components
import ShoppingCart from './ShoppingCart/ShoppingCart';
import PageTracker from './PageTracker/PageTracker';
import Form from './Form/Form';
import Payment from './Payment/Payment';

const prevUserData = [];

const CheckOut = () => {

    //Boolean hook to define render
    const [isPayment, setIsPayment] = useState(false);
    const [userData, setUserDate] = useState('');


    //saving data and boolean from form
    const saveIsPaymentHandler = (udata, bool) => {
        console.log('CHECKOUT');
        console.log(udata);
        setIsPayment(bool);
        setUserDate((prevUserData) => {
            return [udata, ...prevUserData]
        })
    }

    return (
        <>
            <ShoppingCart />
            <PageTracker amIOnPayment = {isPayment} />
            {/* Boolean to define render  */}
            {isPayment ? <Payment formData ={userData} /> : <Form goToPayment={saveIsPaymentHandler} />}
        </>
    );
};

export default CheckOut;