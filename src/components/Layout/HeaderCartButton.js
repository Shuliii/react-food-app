import { useContext } from "react";
import ctx from "../../store/cart-context";

import CartIcon from "./CartIcon";

import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(ctx);

  const numberOfCartItems = cartCtx.items.reduce(
    (curNumber, item) => curNumber + item.amount,
    0
  );
  // const numberOfCartItems = 0;
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
      {/* <CartIcon className={styles.icon} />
      Your Cart
      <div className={styles.badge}>0</div> */}
    </button>
  );
};

export default HeaderCartButton;
