import { ICart } from "../models/ICart";
import { IMovies } from "../models/IMovies";

interface ICartCount {
  cart: ICart[];
  openCart(): void;
}

export const Cart = (props: ICartCount) => {
  const showCart = () => {
    props.openCart();
  };

  const totalCartItem = props.cart.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);

  let cartCountHtml = (
    <div className="cart" onClick={showCart}>
      Cart
    </div>
  );

  if (totalCartItem > 0) {
    cartCountHtml = (
      <div className="cart" onClick={showCart}>
        Cart | {totalCartItem}
      </div>
    );
  }

  return <> {cartCountHtml} </>;
};
