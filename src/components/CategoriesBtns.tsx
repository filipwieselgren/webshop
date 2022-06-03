interface ICategoryId {
  showMovieByCategory(id: number): void;
  showAllMoviesF(): void;
}

export const CategoriesBtns = (props: ICategoryId) => {
  const sendCategoryId = (value: number) => {
    props.showMovieByCategory(value);
  };

  const sendAllCategory = () => {
    props.showAllMoviesF();
  };
  return (
    <>
      <div className="categories-container">
        <div className="categories-btns-container">
          <button
            className="categories-btn"
            onClick={() => {
              sendAllCategory();
            }}
          >
            All movies
          </button>
          <button
            className="categories-btn"
            onClick={() => {
              sendCategoryId(5);
            }}
          >
            Action
          </button>
          <button
            className="categories-btn"
            onClick={() => {
              sendCategoryId(7);
            }}
          >
            Comedy
          </button>
          <button
            className="categories-btn"
            onClick={() => {
              sendCategoryId(8);
            }}
          >
            Sci Fi
          </button>
          <button
            className="categories-btn"
            onClick={() => {
              sendCategoryId(6);
            }}
          >
            Thriller
          </button>
        </div>
      </div>
    </>
  );
};
