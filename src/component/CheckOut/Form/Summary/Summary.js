import React, {useEffect, useState} from 'react';
import './Summary.css'

const Summary = (props) => {

    // const paymentProceedHandler = (bool) =>{
    //     props.onClickGetBool(bool)
    // }

    return (
        <>
            {/* SUMMARY */}
            <div className='summary'>
                <h4 className='summary-text'>Summary</h4>
                <div className='subtotal-container'>
                    <p className='subtotal'>Subtotal:</p>
                    <span className='money'>$700.00</span>
                </div>
                {/* PASSAR ESSA PARTE PARA PAYMENT */}
                {/* <div className='subtotal-container'>
                        <p className='subtotal'>Shipping:</p>
                        <span className='money'>$42.00</span>
                    </div>
                    <hr></hr>
                    <div className='subtotal-container'>
                        <p className='subtotal'>Total:</p>
                        <span className='total-money'>
                            <span className='currency'>CAD</span>
                            $742.00</span>
                    </div> */}
                {/* <button onClick={paymentProceedHandler(true)} className='proceed-btn'>Proceed to payment</button> */}
            </div>
        </>
    );
}

export default Summary;