import { IMovies } from "../models/IMovies";
import logo from "../images/logo.png";

interface IProducts {
  showMovies: IMovies;
  setDisplayInfo: React.Dispatch<React.SetStateAction<boolean>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSingleMovie: React.Dispatch<React.SetStateAction<IMovies>>;
  modal: boolean;
  displayInfo: boolean;
  movieAdded: number;
  setResetCheck: React.Dispatch<React.SetStateAction<boolean>>;
  resetCheck: boolean;
}

export const ProductContainer = (props: IProducts) => {
  const showMovieInfo = () => {
    props.setSingleMovie(props.showMovies);
    props.setModal(!props.modal);
  };

  let addedMovieCheck = <></>;

  let movieImg = (
    <img
      src={props.showMovies.imageUrl}
      alt="Movie image"
      className="img-frontpage"
      onClick={showMovieInfo}
      onError={(e) => {
        e.currentTarget.src = "";
        e.currentTarget.alt = props.showMovies.name;
        e.currentTarget.className = "noImg";
      }}
    />
  );

  if (props.showMovies.id === props.movieAdded && props.resetCheck) {
    addedMovieCheck = (
      <div className="addedMovieContainer">
        <div className="addMovieTxt">This movie is added ✓</div>
      </div>
    );

    setTimeout(() => {
      props.setResetCheck(false);
    }, 500);
  }

  let productHtml = (
    <div key={props.showMovies.id} className="img-container">
      {addedMovieCheck}
      {movieImg}
    </div>
  );

  console.log(props.showMovies);

  return <>{productHtml}</>;
};
