import { IMovies } from "../models/IMovies";

interface ProductContainer {
  movie: IMovies;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setMovie: React.Dispatch<React.SetStateAction<IMovies[]>>;
  setSingleMovie: React.Dispatch<React.SetStateAction<IMovies>>;
  setMovieContainer: React.Dispatch<React.SetStateAction<boolean>>;
  addToCart(m: IMovies): void;
  modal: boolean;
  movieContainer: boolean;
}

export const BtnProductContainer = (props: ProductContainer) => {
  const showMovieInfo = () => {
    props.setSingleMovie(props.movie);
    props.setModal(!props.modal);
  };

  const ToCart = () => {
    props.addToCart(props.movie);
  };

  return (
    <>
      <div className="btn-container">
        <button onClick={ToCart} className="btn-global btn-buy">
          Add to cart
        </button>
        <button onClick={showMovieInfo} className="btn-global btn-info">
          More info
        </button>
      </div>
    </>
  );
};
