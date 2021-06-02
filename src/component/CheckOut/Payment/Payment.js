import './Payment.css'

const Payment = () => {
    return (
        <>
            <div className='payment-container'>
                <form>
                    <div className='contact-info'>
                        <div className='payment-contact'>
                            <span className='payment-contactText'>Email</span>
                            <p className='payment-addressText'>Address</p>
                            <button className='change-btn'>Change</button>
                        </div>
                        <div className='payment-address'>
                            <span className='payment-contactText'>Ship to</span>
                            <p className='payment-addressText'>Address</p>
                            <button className='change-btn'>Change</button>
                        </div>
                    </div>
                    <div className='payment-shipping'>
                        <h2 className='shippingText'>Shipping method</h2>
                        <div className='shipping-container'>
                            <div className='checkbox-shipping'>
                                <input className='checkbox-ship' type='radio' name='shipping'></input>
                                <span className='checkbox-post'>Regular Post</span>
                                <span className='checkbox-price'>$ 55.00</span>
                            </div>
                            <div className='checkbox-shipping2'>
                                <input className='checkbox-ship' type='radio' name='shipping'></input>
                                <span className='checkbox-post'>Express</span>
                                <span className='checkbox-price'>$ 55.00</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Payment;