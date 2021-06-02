import React from 'react';
import Cart from './ShoppingCart/ShoppingCart';
import PageTracker from './PageTracker/PageTracker';
import Form from './Form/Form';
import Payment from './Payment/Payment';

const CheckOut = (props) => {
    return (
        <>
            <Cart/>
            <PageTracker/>
            {/* <Form/> */}
            <Payment/>
        </>
    );
};

export default CheckOut;