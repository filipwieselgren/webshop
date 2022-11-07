import { ICart } from "../models/ICart";
import logo from "../images/logo.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IMovies } from "../models/IMovies";

interface PaymentItems {
  cart: ICart[];
  showPayment: boolean;
}

export const Payment = (props: PaymentItems) => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState<ICart[]>([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartlist") || "");
    if (items !== "") {
      setCartItems(items);
    }
  }, []);

  const addToCart = (movie: IMovies): void => {
    console.log("movie:", movie);

    console.log(1);

    let movieExists = false;

    let temp = [...cartItems];

    for (let i = 0; i < cartItems.length; i++) {
      console.log(2);
      if (cartItems[i].id === movie.id) {
        movieExists = true;
        temp[i].amount++;
        localStorage.setItem("cartlist", JSON.stringify(temp));
        console.log(3);
      }
    }

    if (!movieExists) {
      setCartItems([...cartItems, { movie: movie, amount: 1, id: movie.id }]);

      // localStorage.setItem("cartlist", JSON.stringify(cart));
      console.log(4);
    } else {
      setCartItems(temp);
      localStorage.setItem("cartlist", JSON.stringify(temp));
      console.log(5);
    }
  };

  const removeFromCart = (m: IMovies, amount: number): void => {
    let checkCart = [...cartItems];

    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === m.id && amount > 1) {
        checkCart[i].amount--;
        setCartItems(checkCart);
        localStorage.setItem("cartlist", JSON.stringify(checkCart));
      } else if (cartItems[i].id === m.id && amount === 1) {
        checkCart.splice(i, 1);
        setCartItems(checkCart);
        localStorage.setItem("cartlist", JSON.stringify(checkCart));
      }
    }
  };

  const totalCartCost = cartItems.reduce((acc, cur) => {
    return acc + cur.amount * cur.movie.price;
  }, 0);

  const items = cartItems.map((c) => {
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
                  addToCart(c.movie);
                }}
              >
                Add
              </button>
              <div className="amount">{c.amount}</div>
              <button
                id="add-payment"
                className="btn-global cart-items-btn remove"
                onClick={() => {
                  removeFromCart(c.movie, c.amount);
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
      <nav className="navbar-container">
        <img
          onClick={() => navigate("/")}
          src={logo}
          className="logo"
          alt="Logo"
        />
        <button>Go back</button>
      </nav>
      <div className="payment-body-wrapper">
        <div className="payment-main-wrapper">
          <div className="totalcost-wrapper">
            <div className="cost-txt">Total cost</div>
            <div className="totalcost">{totalCartCost} :-</div>
          </div>
          <div className="payment-movie-wrapper">{items}</div>
        </div>
      </div>
    </>
  );
};
