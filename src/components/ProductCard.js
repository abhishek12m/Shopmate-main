import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';
export const ProductCard = ({ product }) => {
    const {addToCart,cartList,removeFromCart}=useCart();
    const {id, name, price, image } = product;
    const [isInCart,setIsInCart]=useState(false);
    useEffect(()=>{
        const itemInCart=cartList.find(cartItem=>cartItem.id===id);
        if(itemInCart){
            setIsInCart(true);
        }
        else{
            setIsInCart(false);
        }
    },[cartList,id])
    return (
        <div className='productCard'>
            <img src={image} alt={name} />
            <p className='name'>{name}</p>
            <div className='action'>
                <p className='price'>${price}</p>
                {!isInCart && <button onClick={()=>addToCart(product)}>Add to Cart</button>}
                {isInCart && <button className='remove' onClick={()=>removeFromCart(product)}>Remove</button>}
            </div>

        </div>
    )
}
