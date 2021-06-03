const ShippingAddress = () => {
    return (
        <>
            <h2 className='shippingText'>Shipping Address</h2>
            <div className='contact-info'>
                <div className='payment-contact'>
                    <span className='payment-contactText'>Email</span>
                    <p className='payment-addressText'>daniel_aucar@hotmail.com</p>
                    <button className='change-btn'>Change</button>
                </div>
                <div id='shipTo-address' className='payment-contact'>
                    <span className='payment-contactText'>Ship to</span>
                    <p className='payment-addressText'>Rua Hovenia 53, Res. Vila Verde Campinas-SP BR</p>
                    <button className='change-btn'>Change</button>
                </div>
            </div>
        </>
    );
}

export default ShippingAddress;