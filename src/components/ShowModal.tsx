import { useState } from "react";
import { IMovies } from "../models/IMovies";

interface IModal {
  singleMovie: IMovies;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setMovieContainer: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
  movieContainer: boolean;
  addToCart(m: IMovies): void;
}

export const ShowModal = (props: IModal) => {
  const [movieAdded, setMovieAdded] = useState(false);
  const closeModal = () => {
    props.setModal(!props.modal);
  };

  const ToCart = () => {
    props.addToCart(props.singleMovie);
    setMovieAdded(true);

    setTimeout(() => {
      setMovieAdded(false);
    }, 500);
  };

  return (
    <>
      <div className="title-wrapper">
        {movieAdded ? (
          <div className="added-modal">Movie added</div>
        ) : (
          <h3>{props.singleMovie.name}</h3>
        )}
      </div>

      <div className="description">{props.singleMovie.description}</div>
      <div className="modal-bottomInfo">
        <div className="released">Released: {props.singleMovie.year}</div>
        <div className="price">Price: {props.singleMovie.price} :-</div>
      </div>
      <div className="modal-btn-container">
        <button onClick={ToCart} className="btn-global btn-buy">
          Add to cart
        </button>
        <button
          onClick={closeModal}
          id="close-modal"
          className="btn-global btn-close "
        >
          Close
        </button>
      </div>
    </>
  );
};
