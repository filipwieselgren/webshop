import { moveEmitHelpers } from "typescript";
import { ICart } from "../models/ICart";
import { IMovies } from "../models/IMovies";

interface IMoreInfo {
  movie: IMovies;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setMovie: React.Dispatch<React.SetStateAction<IMovies[]>>;
  setSingleMovie: React.Dispatch<React.SetStateAction<IMovies>>;
  setMovieContainer: React.Dispatch<React.SetStateAction<boolean>>;
  updateCart(m: IMovies): void;
  modal: boolean;
  movieContainer: boolean;
}

export const MoreInfo = (props: IMoreInfo) => {
  const showMovieInfo = () => {
    props.setSingleMovie(props.movie);
    props.setModal(!props.modal);
  };

  const addToCart = () => {
    props.updateCart(props.movie);
  };

  return (
    <>
      <button onClick={addToCart} className="btn-global btn-buy">
        Add to cart
      </button>
      <button onClick={showMovieInfo} className="btn-global btn-info">
        More info
      </button>
    </>
  );
};
