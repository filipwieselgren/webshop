import { ICart } from "../models/ICart";

interface ICartCount {
  cart: ICart[];
}

export const Cart = (props: ICartCount) => {
  let cartCountHtml = <div className="cart">Cart</div>;

  const totalCartItem = props.cart.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);

  if (totalCartItem > 0) {
    cartCountHtml = <div className="cart">Cart {totalCartItem}</div>;
  }

  return <> {cartCountHtml} </>;
};
