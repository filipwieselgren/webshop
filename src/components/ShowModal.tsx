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
  const closeModal = () => {
    props.setModal(!props.modal);
  };

  const ToCart = () => {
    props.addToCart(props.singleMovie);
  };

  console.log(props.singleMovie);

  return (
    <>
      <h3>{props.singleMovie.name}</h3>
      <div>{props.singleMovie.description}</div>
      <div>Released: {props.singleMovie.year}</div>
      <div>Price: {props.singleMovie.price} :-</div>
      <div className="modal-btn-container">
        <button onClick={ToCart} className="btn-global btn-buy">
          Add to cart
        </button>
        <button onClick={closeModal} className="btn-global btn-close">
          Close
        </button>
      </div>
    </>
  );
};
