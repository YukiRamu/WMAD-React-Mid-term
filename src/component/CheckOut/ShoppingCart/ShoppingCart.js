import { useState } from 'react';
import './ShoppingCart.css'

const ShoppingCart = () => {

    const [productsInCart, setProductsInCart] = useState([JSON.parse(localStorage.getItem('product'))])
    console.log(productsInCart[0]);

    const deleteProduct = () => {
        let currentProductsList = productsInCart[0];
        let id = productsInCart[0].id
        console.log('CURRENT LIST')
        console.log(currentProductsList);
        let newProductsList = currentProductsList.filter(products => products.id !== id);
        setProductsInCart(newProductsList[0]);
    };

    return (
        <>
            <div>
                {/* SHOPPING CART */}
                <h2 className='cart-title'>Shopping Cart</h2>
                <div className='shopping-cart-container'>
                    {productsInCart[0].map((items) =>
                        <div key={items.id} className='productList-container'>
                            <div className='image'>
                                <img src={items.image} width='180' height="225"/>
                            </div>
                            <div className='product-description'>
                                <span className='product-text'>{items.title}</span>
                                <div className='description-text'>
                                    <p>{items.description}</p>
                                </div>
                            </div>
                            <div className='quantity'>
                                <span className='product-text'>Quantity</span>
                                <p>x <span className='quantity-number'>1</span></p>
                            </div>
                            <div className='total'>
                                <span className='product-text'>Price</span>
                                <p>${items.price} CAD</p>
                            </div>
                            <div className='remove'>
                                <span className='product-text'>Remove</span>
                                <div onClick={deleteProduct} className='trashBin'>
                                    {/* <img/> */}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default ShoppingCart;