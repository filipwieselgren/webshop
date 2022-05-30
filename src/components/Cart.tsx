import { ICart } from "../models/ICart";
import cartEmptyImg from "../images/cart-empty.png";
import cartNotEmptyImg from "../images/cart-not-empty.png";

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
      <img className="cartimg-nav" src={cartEmptyImg} alt="Cart image" />
    </div>
  );

  if (totalCartItem > 0) {
    cartCountHtml = (
      <div className="cart" onClick={showCart}>
        <img className="cartimg-nav" src={cartNotEmptyImg} alt="Cart image" />
        <span className="total-cart-item">{totalCartItem}</span>
      </div>
    );
  }

  return <> {cartCountHtml} </>;
};
