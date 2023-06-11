import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styles from './CartWidget.css'

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="notification counter">3</span>
    </div>
  );
};

export default CartWidget;