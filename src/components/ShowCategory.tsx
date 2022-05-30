import { IMovies } from "../models/IMovies";

interface ICategory {
  categorymovie: IMovies;
  category: boolean;
}

export const ShowCategory = (props: ICategory) => {
  let productHtml = <></>;

  if (props.category) {
    productHtml = (
      <div key={props.categorymovie.id} className="img-container">
        <img
          src={props.categorymovie.imageUrl}
          alt="Movie image"
          className="img-frontpage"
          //   onClick={showMovieInfo}
        />
      </div>
    );
  }

  return <>{productHtml}</>;
};
