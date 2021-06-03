import './Payment.css'

import ShippingAddress from './ChildComponents/ShippingAddress';
import ShippingMethod from './ChildComponents/ShippingMethod';
import PaymentMethod from './ChildComponents/PaymentMethod';
import BillingAddress from './ChildComponents/BillingAddress';

const Payment = (props) => {

    return (
        <>
            <div className='payment-container'>
                <form>
                    <ShippingAddress />
                    <ShippingMethod />
                    <PaymentMethod />
                    <BillingAddress />
                </form>
                <div>
                    {/* SUMMARY */}
                    <div id='summary' className='summary'>
                        <h4 className='summary-text'>Summary</h4>
                        <div className='subtotal-container'>
                            <p className='subtotal'>Subtotal:</p>
                            <span className='money'>$700.00</span>
                        </div>
                        {/* PASSAR ESSA PARTE PARA PAYMENT */}
                        <div className='subtotal-container'>
                        <p className='subtotal'>Shipping:</p>
                        <span className='money'>$55.00</span>
                    </div>
                    <hr></hr>
                    <div className='subtotal-container'>
                        <p className='subtotal'>Total:</p>
                        <span className='total-money'>
                            <span className='currency'>CAD</span>
                            $755.00</span>
                    </div>
                        <button  id='payNow' className='proceed-btn'>Pay now</button>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Payment;