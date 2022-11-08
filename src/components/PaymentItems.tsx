import { ICart } from "../models/ICart";
import { IMovies } from "../models/IMovies";

interface IPay {
  cartItems: ICart[];
  addToCart(movie: IMovies): void;
  removeFromCart(movie: IMovies, amount: number): void;
}

const PaymentItems = (props: IPay) => {
  const items = props.cartItems.map((c) => {
    return (
      <div key={c.id} className="movie-wrapper">
        <div className="item-wrapper">
          <div className="img-wrapper">
            <img
              className="payment-img"
              src={c.movie.imageUrl}
              alt="Image of movie"
            />
          </div>
          <div className="item-txt-wrapper">
            <div className="info">
              <div className="title">{c.movie.name}</div>
              <div className="cost-item">
                Cost: {c.movie.price * c.amount} :-
              </div>
            </div>
            <div className="btns-wrapper">
              <button
                id="remove-payment"
                className="btn-global cart-items-btn add"
                onClick={() => {
                  props.addToCart(c.movie);
                }}
              >
                Add
              </button>
              <div className="amount">{c.amount}</div>
              <button
                id="add-payment"
                className="btn-global cart-items-btn remove"
                onClick={() => {
                  props.removeFromCart(c.movie, c.amount);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      {props.cartItems.length === 0 ? (
        <div className="empty-cart">Your cart is empty</div>
      ) : (
        <></>
      )}
      {items}
    </>
  );
};

export default PaymentItems;
