import axios from "axios";
import React, { useEffect, useState } from "react";
import { ICart } from "../models/ICart";
import { ICategories } from "../models/ICategories";
import { IMovies } from "../models/IMovies";
import { BtnProductContainer } from "./BtnProductContainer";
import { Cart } from "./Cart";
import { CartItems } from "./CartItems";
import { CategoriesBtns } from "./CategoriesBtns";
import { Header } from "./Header";
import { Payment } from "./Payment";
import { ProductContainer } from "./ProductContainer";
import { Search } from "./Search";
import { ShowCategory } from "./ShowCategory";

import { ShowModal } from "./ShowModal";

const apiUrl =
  "https://medieinstitutet-wie-products.azurewebsites.net/api/products";

const apiCategoriesUrl =
  "https://medieinstitutet-wie-products.azurewebsites.net/api/categories/";

export const ShowProducts = () => {
  const [movie, setMovie] = useState<IMovies[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<IMovies[]>([]);
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
    productCategory: [{ categoryId: 0, category: "" }],
  });

  const [cart, setCart] = useState<ICart[]>([]);
  const [displayInfo, setDisplayInfo] = useState<boolean>(false);
  const [showCartItems, setShowCartItems] = useState<boolean>(false);
  const [showPayment, setShowPayment] = useState<boolean>(false);
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [loader, setLoader] = useState<boolean>(true);
  const [movieAdded, setMovieAdded] = useState<number>(0);
  const [resetCheck, setResetCheck] = useState<boolean>(false);

  let showLoader = <></>;

  let header = <Header />;

  let cartItems = <></>;

  let modalHtml = <></>;

  let paymentHtml = <></>;

  useEffect(() => {
    axios.get<IMovies[]>(apiUrl).then((response) => {
      setMovie(response.data);
      setFilteredMovies(response.data);
      setLoader(false);
    });

    axios.get<ICategories[]>(apiCategoriesUrl).then((response) => {
      setCategories(response.data);
      console.log(categories);
    });

    setCart(JSON.parse(localStorage.getItem("cartlist") || "[]"));
  }, []);

  if (!movie) return null;

  const addToCart = (movie: IMovies): void => {
    let movieExists = false;

    let temp = [...cart];

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === movie.id) {
        movieExists = true;
        temp[i].amount++;
        localStorage.setItem("cartlist", JSON.stringify(temp));
      }
    }

    if (!movieExists) {
      setCart([...cart, { movie: movie, amount: 1, id: movie.id }]);
      localStorage.setItem("cartlist", JSON.stringify(cart));
    } else {
      setCart(temp);
      localStorage.setItem("cartlist", JSON.stringify(temp));
    }
  };

  const movieAddedAnimation = (m: IMovies): void => {
    for (let i = 0; i < movie.length; i++) {
      if (movie[i].id === m.id) {
        setMovieAdded(m.id);
        setResetCheck(true);
      }
    }
  };

  const removeFromCart = (m: IMovies, amount: number): void => {
    let checkCart = [...cart];

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === m.id && amount > 1) {
        checkCart[i].amount--;
        setCart(checkCart);
        localStorage.setItem("cartlist", JSON.stringify(checkCart));
      } else if (cart[i].id === m.id && amount === 1) {
        checkCart.splice(i, 1);
        setCart(checkCart);
        localStorage.setItem("cartlist", JSON.stringify(checkCart));
      }
    }
  };

  const toPayment = () => {
    setMovieContainer(!movieContainer);
    setShowPayment(!showPayment);
    setShowCartItems(!showCartItems);
  };

  const showAllMoviesF = () => {
    setFilteredMovies(movie);
  };

  const showMovieByCategory = (id: number) => {
    let filteredMovies: IMovies[] = [];
    for (let j = 0; j < movie.length; j++) {
      for (let i = 0; i < movie[j].productCategory.length; i++) {
        if (movie[j].productCategory[i].categoryId === id) {
          filteredMovies.push(movie[j]);
        }
      }
    }

    if (filteredMovies) {
      setFilteredMovies(filteredMovies);
    }
  };

  let categoriesBtns = (
    <CategoriesBtns
      showMovieByCategory={showMovieByCategory}
      showAllMoviesF={showAllMoviesF}
    />
  );

  if (loader) {
    showLoader = (
      <div className="loader-container">
        <div className="loader">
          <div className="ball"></div>
          <div className="ball"></div>
          <div className="ball"></div>
          <span>Loading...</span>
        </div>
      </div>
    );
    header = <></>;
    categoriesBtns = <></>;
  }

  const showAllMovies = filteredMovies.map((m) => {
    if (movieContainer && m.imageUrl) {
      return (
        <div key={m.id} className="single-movie-container">
          <ProductContainer
            showMovies={m}
            setDisplayInfo={setDisplayInfo}
            displayInfo={displayInfo}
            setSingleMovie={setSingleMovie}
            setModal={setModal}
            modal={modal}
            movieAdded={movieAdded}
            setResetCheck={setResetCheck}
            resetCheck={resetCheck}
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
            movieAddedAnimation={movieAddedAnimation}
          />
        </div>
      );
    } else {
      return;
    }
  });

  const openCart = () => setShowCartItems(!showCartItems);

  if (showCartItems) {
    cartItems = (
      <CartItems
        cart={cart}
        openCart={openCart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        toPayment={toPayment}
      />
    );
  }

  if (modal) {
    modalHtml = (
      <div className="modal-container">
        <div className="modal-box" key={singleMovie.id}>
          <ShowModal
            singleMovie={singleMovie}
            setModal={setModal}
            setMovieContainer={setMovieContainer}
            movieContainer={movieContainer}
            modal={modal}
            addToCart={addToCart}
          />
        </div>
      </div>
    );
  }

  if (showPayment) {
    paymentHtml = <Payment cart={cart} showPayment={showPayment} />;
  }

  return (
    <>
      <nav className="navbar-container">
        <div className="logo">Logo</div>
        <Search />
        <Cart cart={cart} openCart={openCart} />
      </nav>
      {showLoader}
      {cartItems}
      {header}
      {categoriesBtns}
      {modalHtml}
      <div className="movie-main-container">{showAllMovies}</div>

      {paymentHtml}
    </>
  );
};
