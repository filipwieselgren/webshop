import axios from "axios";
import React, { useEffect, useState } from "react";
import { ICart } from "../models/ICart";
import { IMovies } from "../models/IMovies";
import { MoreInfo } from "./MoreInfo";
import { Navbar } from "./Navbar";
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

  useEffect(() => {
    axios.get<IMovies[]>(apiUrl).then((response) => {
      setMovie(response.data);
    });
  }, []);

  if (!movie) return null;

  const updateCart = (movie: IMovies): void => {
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
          <div className="img-container">
            <img src={m.imageUrl} alt="Movie image" className="img" />
          </div>
          <div className="price">{m.price} :-</div>
          <div className="btn-container">
            <MoreInfo
              movie={m}
              setModal={setModal}
              setMovie={setMovie}
              setSingleMovie={setSingleMovie}
              setMovieContainer={setMovieContainer}
              updateCart={updateCart}
              movieContainer={movieContainer}
              modal={modal}
            />
          </div>
        </div>
      );
    } else {
      return;
    }
  });

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
      <Navbar />
      {html}
      <div className="movie-main-container">{showMovies}</div>
    </>
  );
};
