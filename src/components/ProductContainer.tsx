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
  // const showInfo = () => {
  //   props.setDisplayInfo(true);
  // };
  const showMovieInfo = () => {
    props.setSingleMovie(props.movie);
    props.setModal(!props.modal);
  };

  let infoContainer = <></>;

  // if (props.displayInfo === true) {
  //   infoContainer = (
  //     <div className="info-container">
  //       <h3 className="movie-name">{props.movie.name}</h3>
  //       <div className="price">Price: {props.movie.price} :-</div>
  //     </div>
  //   );
  // }

  return (
    <>
      <div
        key={props.movie.id}
        className="img-container"
        // onMouseEnter={showInfo}
      >
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
