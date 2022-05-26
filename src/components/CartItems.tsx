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
          <div className="cart-info-container">
            <div className="cart-img-container">
              <img className="movie-img-cart" src={c.movie.imageUrl} alt="" />
            </div>
            <div>{c.movie.name}</div>
            <div>{c.amount} in your cart.</div>
            <div>Cost: {c.movie.price * c.amount} :-</div>
          </div>
          <div className="cart-items-btn-container">
            <button className="cart-items-btn add">Add</button>
            <button className="cart-items-btn remove">Remove</button>
          </div>
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
        <div className="cart-total-container">
          <div className="cart-total">
            Total items: {totalCartItem} | Total cost: {totalCartCost} :-
          </div>
          <button className="to-payment-btn">To payment</button>
        </div>
        <div className="cart-list">
          {moviesInCart} {cartEmpty}
        </div>
      </div>
    </>
  );
};
