import { IMovies } from "../models/IMovies";

interface IModal {
  singleMovie: IMovies;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setMovieContainer: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
  movieContainer: boolean;
}

export const ShowModal = (props: IModal) => {
  const closeModal = () => {
    props.setModal(!props.modal);
  };

  return (
    <div className="modal-txt">
      <h3>Film:{props.singleMovie.name}</h3>
      <div>{props.singleMovie.description}</div>
      <div>Released: {props.singleMovie.year}</div>
      <div>Price: {props.singleMovie.price} :-</div>

      <button onClick={closeModal} className="btn-global">
        Close
      </button>
    </div>
  );
};
