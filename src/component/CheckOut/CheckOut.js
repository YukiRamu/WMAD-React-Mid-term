import React, { useEffect, useState } from 'react';
import './CheckOut.css';

//Components
import Cart from './ShoppingCart/ShoppingCart';
import PageTracker from './PageTracker/PageTracker';
import Form from './Form/Form';
import Payment from './Payment/Payment';

const CheckOut = (props) => {

    //Boolean hook to define render
    const [isPayment, setIsPayment] = useState(false);

    const saveIsPaymentHandler = (data, bool) => {
        // setIsPayment(bool);
        console.log('CHECKOUT');
        console.log(data);
        setIsPayment(bool);
    }

    return (
        <>
            <Cart />
            <PageTracker />
            {isPayment ? <Payment /> : <Form goToPayment={saveIsPaymentHandler} />}
            {/* {isPayment ? <Payment /> : <Form />} */}
        </>
    );
};

export default CheckOut;