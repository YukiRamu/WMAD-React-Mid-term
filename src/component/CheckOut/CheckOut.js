import React, {useEffect, useState} from 'react';
import './CheckOut.css';

//Components
import Cart from './ShoppingCart/ShoppingCart';
import PageTracker from './PageTracker/PageTracker';
import Form from './Form/Form';
import Payment from './Payment/Payment';

const CheckOut = (props) => {
    const [isPayment, setIsPayment] = useState(false);

    return (
        <>
            <Cart/>
            <PageTracker/>
            {isPayment ? <Payment/> : <Form goToPayment = {isPayment}/>}
        </>
    );
};

export default CheckOut;