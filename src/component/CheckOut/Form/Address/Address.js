import './Address.css'

const Address = () => {
    return (
        <>
            {/* ADDRESS */}
            <div className='address-container'>
                <h2 className='shippingAddress'>Shipping Address</h2>
                <div>
                    <input className='address-input' type='text' placeholder='First name' />
                    <input className='address-input' type='text' placeholder='Last name' />
                </div>
                <div>
                    <input className='email-input' type='text' placeholder='Address' />
                </div>
                <div>
                    <input className='email-input' type='text' placeholder='Unit - apt, suite (optional)' />
                </div>
                <div>
                    <input className='email-input' type='text' placeholder='City' />
                </div>
                <div>
                    <input className='country-input' type='text' placeholder='Province' />
                    <input className='country-input' type='text' placeholder='Postal Code' />
                </div>
                <div>
                    <input className='email-input' type='text' placeholder='Phone Number' />
                </div>
            </div>
        </>
    );
}

export default Address;