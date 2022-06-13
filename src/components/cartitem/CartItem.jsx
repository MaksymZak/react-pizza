import { useDispatch } from "react-redux";
import styles from "./CartItem.module.scss";
import {
  deletePizza,
  increment,
  decrement,
} from "../../redux/slices/cartSlice";

const CartItem = ({ pizza }) => {
  const dispatch = useDispatch();

  const { id, imageUrl, name, price, sizes, types, amount } = pizza;
  return (
    <li className={styles.cart__item}>
      <div className={styles.cart__bottom_wrapper}>
        <img src={imageUrl} alt={name} className={styles.cart__img} />
        <div className={styles.cart__item_description}>
          <h3 className={styles.cart__item_subtitle}>{name}</h3>
          <p className={styles.cart__item_text}>
            {types} тесто, {sizes} см.
          </p>
        </div>
      </div>
      <div>
        <button
          onClick={() => dispatch(decrement(pizza))}
          className={styles.cart__item_amount}
        >
          <span>-</span>
        </button>
        <span className={styles.cart__item_amount_span}>{amount}</span>
        <button
          onClick={() => dispatch(increment(pizza))}
          className={styles.cart__item_amount}
        >
          +
        </button>
      </div>
      <p className={styles.cart__item_price}>{price * amount} ₽</p>
      <button
        onClick={() => dispatch(deletePizza(pizza))}
        className={styles.cart__item_delete}
      >
        +
      </button>
    </li>
  );
};

export default CartItem;
