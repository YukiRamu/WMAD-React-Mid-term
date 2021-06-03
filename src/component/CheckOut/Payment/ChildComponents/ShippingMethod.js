const ShippingMethod = () => {
    return (
        <>
            <div className='payment-shipping'>
                <h2 className='shippingText'>Shipping method</h2>
                <div className='shipping-container'>
                    <div className='checkbox-shipping'>
                        <input className='checkbox-ship' type='radio' name='shipping'></input>
                        <span className='checkbox-post'>Regular Post</span>
                        <span className='checkbox-price'>$ 55.00</span>
                    </div>
                    <div id='checkbox-shipMethod' className='checkbox-shipping'>
                        <input className='checkbox-ship' type='radio' name='shipping'></input>
                        <span className='checkbox-post'>Express</span>
                        <span className='checkbox-price'>$ 75.00</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShippingMethod;