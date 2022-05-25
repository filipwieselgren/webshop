import { IMovies } from "../models/IMovies";

interface IProducts {
  movie: IMovies;
}

export const ProductContainer = (props: IProducts) => {
  return (
    <>
      <div className="img-container">
        <img src={props.movie.imageUrl} alt="Movie image" className="img" />
      </div>
      <div className="info-container">
        <h3 className="movie-name">{props.movie.name}</h3>
        <div className="price">Price: {props.movie.price} :-</div>
      </div>
    </>
  );
};
