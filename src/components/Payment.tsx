import { ICart } from "../models/ICart";
import logo from "../images/logo.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IMovies } from "../models/IMovies";
import PaymentItems from "./PaymentItems";
import PaySection from "./PaySection";

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
    let movieExists = false;

    let temp = [...cartItems];

    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === movie.id) {
        movieExists = true;
        temp[i].amount++;
        localStorage.setItem("cartlist", JSON.stringify(temp));
      }
    }

    if (!movieExists) {
      setCartItems([...cartItems, { movie: movie, amount: 1, id: movie.id }]);

      // localStorage.setItem("cartlist", JSON.stringify(cart));
    } else {
      setCartItems(temp);
      localStorage.setItem("cartlist", JSON.stringify(temp));
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

  return (
    <>
      <nav className="navbar-container">
        <img
          onClick={() => navigate("/")}
          src={logo}
          className="logo"
          alt="Logo"
        />
        <button className="goBack-btn" onClick={() => navigate("/")}>
          Go back
        </button>
      </nav>
      <div className="payment-body-wrapper">
        <div className="payment-main-wrapper">
          <div className="costNItem-wrapper">
            <div className="totalcost-wrapper">
              <div className="cost-txt">Total cost</div>
              <div className="totalcost">{totalCartCost} :-</div>
            </div>

            <div className="payment-movie-wrapper">
              {
                <PaymentItems
                  cartItems={cartItems}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                />
              }
            </div>
          </div>

          <PaySection />
        </div>
      </div>
    </>
  );
};
