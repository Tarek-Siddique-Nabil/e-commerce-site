import React from 'react';
import '../Reviewitem/reviewitem.css'

const Reviewitem = (props) => {
    const {name , price , quantity,key , img} = props.product;
    const  { handleCart} = props;
    return (
        <div className='product'>
            <div>
          <img src={img} alt="" />
            <h4 className='product-name'>{name.slice(0,49)}</h4>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={() => handleCart(key) } className='btn-regular'>Remove</button>
            </div>
        </div>
    );
};

export default Reviewitem;