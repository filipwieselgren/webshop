import axios from "axios";
import React, { useEffect, useState } from "react";
import { ICart } from "../models/ICart";
import { IMovies } from "../models/IMovies";
import { BtnProductContainer } from "./BtnProductContainer";
import { Cart } from "./Cart";
import { CartItems } from "./CartItems";
import { ProductContainer } from "./ProductContainer";
import { Search } from "./Search";
import { ShowModal } from "./ShowModal";

const apiUrl =
  "https://medieinstitutet-wie-products.azurewebsites.net/api/products";

export const ShowProducts = () => {
  const [movie, setMovie] = useState<IMovies[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [movieContainer, setMovieContainer] = useState<boolean>(true);
  const [singleMovie, setSingleMovie] = useState<IMovies>({
    name: "",
    id: 0,
    price: 0,
    imageUrl: "",
    description: "",
    year: 0,
    api: "",
  });

  const [cart, setCart] = useState<ICart[]>([]);
  const [displayInfo, setDisplayInfo] = useState<boolean>(false);
  const [showCartItems, setShowCartItems] = useState<boolean>(false);

  useEffect(() => {
    axios.get<IMovies[]>(apiUrl).then((response) => {
      setMovie(response.data);
    });
  }, []);

  if (!movie) return null;

  const addToCart = (movie: IMovies): void => {
    let movieExists = false;

    let temp = [...cart];

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === movie.id) {
        movieExists = true;
        temp[i].amount++;
      }
    }

    if (!movieExists) {
      setCart([...cart, { movie: movie, amount: 1, id: movie.id }]);
    } else {
      setCart(temp);
    }
  };

  const showMovies = movie.map((m) => {
    if (movieContainer && m.imageUrl) {
      return (
        <div key={m.id} className="single-movie-container">
          <ProductContainer
            movie={m}
            setDisplayInfo={setDisplayInfo}
            displayInfo={displayInfo}
            setSingleMovie={setSingleMovie}
            setModal={setModal}
            modal={modal}
          />
          <BtnProductContainer
            movie={m}
            setModal={setModal}
            setMovie={setMovie}
            setSingleMovie={setSingleMovie}
            setMovieContainer={setMovieContainer}
            addToCart={addToCart}
            movieContainer={movieContainer}
            modal={modal}
          />
        </div>
      );
    } else {
      return;
    }
  });

  let cartItems = <></>;
  const openCart = () => {
    setShowCartItems(!showCartItems);
  };
  if (showCartItems) {
    cartItems = (
      <CartItems cart={cart} openCart={openCart} addToCart={addToCart} />
    );
  }

  let html = <></>;

  if (modal) {
    html = (
      <div className="modal-container">
        <div className="modal-box" key={singleMovie.id}>
          <ShowModal
            singleMovie={singleMovie}
            setModal={setModal}
            setMovieContainer={setMovieContainer}
            movieContainer={movieContainer}
            modal={modal}
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <nav className="navbar-container">
        <div className="logo">Logo</div>
        <Search />
        <Cart cart={cart} openCart={openCart} />
      </nav>
      {cartItems}
      {html}
      <div className="movie-main-container">{showMovies}</div>
    </>
  );
};
