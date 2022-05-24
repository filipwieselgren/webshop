import { ICart } from "../models/ICart";

interface ICartCount {
  cart: ICart[];
}

export const Navbar = (props: ICartCount) => {
  let cartCountHtml = <div className="cart">Cart</div>;

  let totalCartItem = props.cart.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);

  if (totalCartItem > 0) {
    cartCountHtml = <div className="cart">Cart {totalCartItem}</div>;
  }
  console.log(totalCartItem);
  return (
    <nav className="navbar-container">
      <div className="logo">Logo</div>
      <div className="search-bar">Search bar </div>
      {cartCountHtml}
    </nav>
  );
};
