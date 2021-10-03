import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Reviewitem from '../../Reviewitem/Reviewitem';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
const OrderReview = () => {
    const [products] = useProducts([]);
    const [cart ,setCart] = useCart(products);
    const history  = useHistory();
    const handlebutton = key =>{
        const newCart = cart.filter( product => product.key !== key);
        setCart(newCart);
        deleteFromDb(key);
    }
    const handlePlaceholder = () => {
        history.push('/placeOrder');
        setCart([]);
        clearTheCart()
        
    }
    return(
        <div className='shop-container'>
            <div className='product-container'>
               {
                   cart.map(product => <Reviewitem 
                    key={product.key}
                    handleCart={handlebutton}
                    product={product}></Reviewitem>)
               }
            </div>
            <div className='cart-container'>
            <Cart  cart={cart}>
             <button onClick={handlePlaceholder} className='btn-regular'>Place Order</button>
            </Cart>
            </div>
        </div>
    )
};

export default OrderReview;