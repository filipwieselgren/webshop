import { IMovies } from "../models/IMovies";

interface IProducts {
  movie: IMovies;
  setDisplayInfo: React.Dispatch<React.SetStateAction<boolean>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSingleMovie: React.Dispatch<React.SetStateAction<IMovies>>;
  modal: boolean;
  displayInfo: boolean;
}

export const ProductContainer = (props: IProducts) => {
  const showMovieInfo = () => {
    props.setSingleMovie(props.movie);
    props.setModal(!props.modal);
  };

  let infoContainer = <></>;

  return (
    <>
      <div key={props.movie.id} className="img-container">
        <img
          src={props.movie.imageUrl}
          alt="Movie image"
          className="img-frontpage"
          onClick={showMovieInfo}
        />
      </div>
      <>{infoContainer}</>
    </>
  );
};
