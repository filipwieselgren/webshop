import { useLocation, useNavigate } from "react-router-dom";
import { ICart } from "../models/ICart";
import { IMovies } from "../models/IMovies";

interface IMoviesInCart {
  cart: ICart[];
  openCart(): void;
  addToCart(m: IMovies): void;
  removeFromCart(m: IMovies, amount: number): void;
  toPayment(): void;
}

export const CartItems = (props: IMoviesInCart) => {
  const getCloseCart = () => props.openCart();

  const addItemToCart = (m: IMovies) => props.addToCart(m);

  const removeItemFromCart = (m: IMovies, amount: number) => {
    props.removeFromCart(m, amount);
  };

  const navigate = useNavigate();

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
            <button
              className="btn-global cart-items-btn add"
              onClick={() => {
                addItemToCart(c.movie);
              }}
            >
              Add
            </button>
            <button
              className="btn-global cart-items-btn remove"
              onClick={() => {
                removeItemFromCart(c.movie, c.amount);
              }}
            >
              Remove
            </button>
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
          <button className="close-cart" onClick={getCloseCart}>
            Close cart
          </button>
          <button
            className="to-payment-btn"
            onClick={() => navigate("/payment")}
          >
            To payment
          </button>
          <div className="cart-total">
            Total movies: {totalCartItem} | Total cost: {totalCartCost} :-
          </div>
        </div>
        <div className="cart-list">
          {moviesInCart} {cartEmpty}
        </div>
      </div>
    </>
  );
};
