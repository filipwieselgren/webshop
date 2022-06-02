import { IMovies } from "../models/IMovies";

interface ProductContainer {
  movie: IMovies;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setMovie: React.Dispatch<React.SetStateAction<IMovies[]>>;
  setSingleMovie: React.Dispatch<React.SetStateAction<IMovies>>;
  setMovieContainer: React.Dispatch<React.SetStateAction<boolean>>;
  addToCart(m: IMovies): void;
  movieAddedAnimation(m: IMovies): void;
  modal: boolean;
  movieContainer: boolean;
}

export const BtnProductContainer = (props: ProductContainer) => {
  const showMovieInfo = () => {
    props.setSingleMovie(props.movie);
    props.setModal(!props.modal);
  };

  const toCart = () => {
    props.addToCart(props.movie);
    props.movieAddedAnimation(props.movie);
  };

  return (
    <>
      <div className="btn-container">
        <button
          onClick={toCart}
          id={props.movie.id.toString()}
          className="btn-global btn-buy"
        >
          Add to cart
        </button>
        <button onClick={showMovieInfo} className="btn-global btn-info">
          More info
        </button>
      </div>
    </>
  );
};
