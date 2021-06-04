import './ShoppingCart.css'

const ShoppingCart = () => {

    const deleteProduct = id => {
        let currentListUsers = this.state.users;
        let newListUsers = currentListUsers.filter(user => user.id !== id);
        this.setState({
            users: newListUsers
        });
    };

    //USER MAPPING - TO USE LATER

//     <div className="App">
//     {props.users.map((user, index) => (
//       <div key={index} className="userBorder">
//         <p>Name: {user.name}</p>
//         <p>Email: {user.email} </p>
//         <p>Age: {user.age} </p>
//       </div>
//     ))}
//   </div>

    return (
        <>
            <div>
                {/* SHOPPING CART */}
                <h2 className='cart-title'>Shopping Cart</h2>
                <div className='shopping-cart-container'>
                    <div className='productList-container'>
                        <div className='image'>
                            {/* <img/> */}
                        </div>
                        <div className='product-description'>
                            <span className='product-text'>Product</span>
                            <div className='description-text'>
                                <p>Product</p>
                            </div>
                        </div>
                        <div className='quantity'>
                            <span className='product-text'>Quantity</span>
                            <p>x <span className='quantity-number'>1</span></p>
                        </div>
                        <div className='total'>
                            <span className='product-text'>Total</span>
                            <p>$700.00 CAD</p>
                        </div>
                        <div className='remove'>
                            <span className='product-text'>Remove</span>
                            <div onClick={deleteProduct} className='trashBin'>
                                {/* <img/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShoppingCart;