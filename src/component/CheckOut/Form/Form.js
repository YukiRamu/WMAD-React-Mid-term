import Address from './Address/Address';
import Summary from './Summary/Summary'
import './Form.css'

const Form = () => {
    return (
        <>
            {/* FORM */}
            <div className='form-container'>
                <div className='form'>
                    <form>
                        <div className='contactText'>
                            <h2 className='contactInfo'>Contact Info</h2>
                            <span className='account'>Already have an account? </span>
                            <a className='account-a'> Log In</a>
                        </div>
                        <div>
                            <input className='email-input' type='text' placeholder='Email' />
                            <div className='checkbox-container'>
                                <input className='checkbox' type='checkbox'></input>
                                <span className='checkboxText'>Keep me up to date on news and exclusive offers</span>
                            </div>
                        </div>
                        <Address/>
                    </form>
                </div>
                <Summary/>
            </div>
        </>
    );
}

export default Form;