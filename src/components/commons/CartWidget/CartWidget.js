import './CartWidget.css'
import cart from './assets/cart.svg'
import { useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalUnity } = useContext(CartContext)

  return (
    <Link to='/cart' className='CartWidget' >
      <div className='CartIcon'>
        <img className='CartImg' src={cart} alt='cart-widget'/>
        <span className='CartQuantity'>{totalUnity()}</span>
      </div>
    </Link>
  );
};

export default CartWidget;
