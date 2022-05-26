import { ICart } from "../models/ICart";

interface IMoviesInCart {
  cart: ICart[];
}

export const CartItems = (props: IMoviesInCart) => {
  const totalCartCost = props.cart.reduce((acc, cur) => {
    return acc + cur.amount * cur.movie.price;
  }, 0);

  const totalCartItem = props.cart.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);

  let moviesInCart = props.cart.map((c) => {
    if (props.cart) {
      return (
        <div className="cart-items" key={c.id}>
          <img className="movie-img-cart" src={c.movie.imageUrl} alt="" />
          <div>{c.movie.name}</div>
          <div>{c.amount} in your cart.</div>
          <div>Cost: {c.movie.price * c.amount} :-</div>
        </div>
      );
    } else {
      return;
    }
  });

  let cartEmpty = <></>;

  if (props.cart.length === 0) {
    cartEmpty = <div className="cart-empty">Your cart is empty</div>;
  }

  return (
    <>
      <div className="cart-container">
        <div className="cart-total">
          Total items: {totalCartItem} | Total cost: {totalCartCost} :-
        </div>
        <div className="cart-list">
          {moviesInCart} {cartEmpty}
        </div>
      </div>
    </>
  );
};
