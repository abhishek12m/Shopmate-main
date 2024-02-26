import { useCart } from '../context/CartContext';
import './ProductCard.css';
export const ProductCard = ({ product }) => {
    const {addToCart}=useCart();
    const { name, price, image } = product;
    return (
        <div className='productCard'>
            <img src={image} alt={name} />
            <p className='name'>{name}</p>
            <div className='action'>
                <p className='price'>${price}</p>
                <button onClick={()=>addToCart(product)}>Add to Cart</button>
            </div>

        </div>
    )
}
