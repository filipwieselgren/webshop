import { IMovies } from "../models/IMovies";

interface IProducts {
  showMovies: IMovies;
  setDisplayInfo: React.Dispatch<React.SetStateAction<boolean>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSingleMovie: React.Dispatch<React.SetStateAction<IMovies>>;
  modal: boolean;
  displayInfo: boolean;
  category: boolean;
  // movieCategory: IMovies;
}

export const ProductContainer = (props: IProducts) => {
  const showMovieInfo = () => {
    props.setSingleMovie(props.showMovies);
    props.setModal(!props.modal);
  };

  let productHtml = (
    <div key={props.showMovies.id} className="img-container">
      <img
        src={props.showMovies.imageUrl}
        alt="Movie image"
        className="img-frontpage"
        onClick={showMovieInfo}
      />
    </div>
  );

  return <>{productHtml}</>;
};
