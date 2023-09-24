// import Card from "../UI/Card";
// import { useState } from "react";
import { useContext } from "react";
import ctx from "../../store/cart-context";

import CartItem from "./CartItem";
import Modal from "../UI/Modal";

import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(ctx);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem name={item.name} price={item.price} amount={item.amount} />
      ))}
    </ul>
  );

  //   const content = !isModal ? (
  //     <div>test</div>
  //   ) : (

  //   );

  return (
    <Modal onClick={props.onClick}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClick}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
